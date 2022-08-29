import { Filter } from "mongodb";
import { getCollection } from "./getCollection";

type FetchAllDocumentProps = {
  collectionName: string;
  limit: number;
  matches: Filter<any>[];
};

export const fetchAllDocuments = async <T = any>({
  collectionName,
  matches,
  limit,
}: FetchAllDocumentProps): Promise<T[]> => {
  const collection = await getCollection(collectionName);
  const cursor = collection.aggregate([
    ...matches.map(($match) => ({ $match })),
    { $limit: limit },
    { "$project": { "_id": { "$toString": "$_id" } } }
  ]);

  const dbResults: any[] = [];
  while (await cursor.hasNext()) {
    const document = await cursor.next();
    if (document) {
      dbResults.push(document);
    }
  }
  return dbResults;
};
