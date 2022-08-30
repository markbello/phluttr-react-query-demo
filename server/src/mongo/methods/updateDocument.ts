import { Filter, Document } from "mongodb";
import { getCollection } from "./getCollection";


type UpdateDocumentProps<T> = {
  collectionName: string;
  filter: Filter<Document>;
  data: any;
};

export const updateDocument = async <T>({
  collectionName,
  filter,
  data,
}: UpdateDocumentProps<T>) => {
  const collection = await getCollection(collectionName);
  const response = await collection.findOneAndUpdate(filter, data);
  return response;
};
