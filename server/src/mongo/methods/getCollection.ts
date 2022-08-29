import { connectToDatabase } from '../utils/connectToDatabase';

export const getCollection = async (collectionName: string) => {
  const db = await connectToDatabase();
  return db.collection(collectionName);
};
