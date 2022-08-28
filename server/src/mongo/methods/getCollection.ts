import { connectToDatabase } from '../utils/connectToDatabase';

export const getCollection = async <T>(collectionName: string) => {
  const db = await connectToDatabase();
  return db.collection<T>(collectionName);
};
