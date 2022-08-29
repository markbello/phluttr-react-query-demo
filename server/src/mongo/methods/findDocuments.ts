import { Document, Filter } from 'mongodb';
import { getCollection } from './getCollection';

type FindDocumentsProps = {
  collectionName: string;
  query?: Filter<Document>;
};

export const findDocuments = async <T = any>({
  collectionName,
  query,
}: FindDocumentsProps): Promise<T[]> => {
  const collection = await getCollection(collectionName);

  const cursor = query ? collection.find() : collection.find(query, { limit: 1000 });

  const dbResults: any[] = [];
  while (await cursor.hasNext()) {
    const document = await cursor.next();
    if (document) {
      dbResults.push(document);
    }
  }
  return dbResults;
};
