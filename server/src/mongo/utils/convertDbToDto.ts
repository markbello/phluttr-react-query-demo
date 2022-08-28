// TODO need to rethink this as there is more that just `id` conversion
// we convert all keys in params to _key in the document and vise-versa
import { Id, _Id } from './InterfaceId';
import { binaryToString } from './binaryToString';

type ParamEntries = [string, any];

export const convertDbToDto = <DbType extends _Id | any, DtoType extends Id | any>(
  document: DbType
) => {
  if (!document) {
    return undefined;
  }

  const entries = Object.entries(document as any).map(([_key, _value]: ParamEntries) => {
    if (_key.startsWith('_')) {
      const key = _key.substr(1); // ex: `_id` => `id`
      const value = binaryToString(_value); // ex: Binary => 'e45b-34a…defc'
      return [key, value];
    }
    return [_key, _value];
  });

  const dto: DtoType = (Object as any).fromEntries(entries) as DtoType;
  return dto;
};
