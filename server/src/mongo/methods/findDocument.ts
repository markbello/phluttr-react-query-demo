import { Document, Filter } from 'mongodb';
import { getCollection } from './getCollection';

type FindDocumentsProps = {
  collectionName: string;
  query: Filter<Document>;
};

export const findDocument = async <T = any>({
  collectionName,
  query,
}: FindDocumentsProps): Promise<T> => {
  const collection = await getCollection(collectionName);

  const dbResults = collection.findOne(query) as unknown as T;

  return dbResults;
};
