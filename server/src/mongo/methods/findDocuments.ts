import { getCollection } from "./getCollection";

type FindDocumentsProps = {
  collectionName: string;
};

export const findDocuments = async <T = any>({
  collectionName,
}: FindDocumentsProps): Promise<T[]> => {
  const collection = await getCollection<T>(collectionName);

  const cursor = collection.find();

  const dbResults: any[] = [];
  while (await cursor.hasNext()) {
    const document = await cursor.next();
    if (document) {
      dbResults.push(document);
    }
  }
  return dbResults;
};
