import MUUID from 'uuid-mongodb';
import { FilterQuery } from 'mongodb';
import { Binary } from 'bson';

type ParamEntries = [string, Binary];

/**
 *  Convert all `fooId` fields to `_fooId`
 *  (i.e. a Data Transfer Object to a Database Object)
 */
export const convertDtoToDb = <DtoType, DbType>(
  // export const convertDtoToDb = <DtoType extends Id, DbType extends _Id>(
  filter: FilterQuery<any>,
  data: DtoType
): DbType => {
  let document: any = data;
  Object.entries(filter).forEach(([_key, _value]: ParamEntries) => {
    const key = _key.substr(1);
    const { [key]: _, ...sansKey } = document;
    document = { ...sansKey, [_key]: _value } as unknown as DbType;
  });
  // if key ends with 'Ids', convert string[] to Binary[]
  const entries = Object.entries(document).map(([key, value]) => {
    if (!key.startsWith('_') && key.endsWith('Ids') && Array.isArray(value)) {
      return [`_${key}`, value.map((strValue) => MUUID.from(strValue))];
    }
    return [key, value];
  });

  const db: DbType = (Object as any).fromEntries(entries as [any]) as unknown as DbType;
  return db;
};
