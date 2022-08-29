import { fetchAllDocuments } from "../../mongo/methods/fetchAllDocuments";
import { findDocuments } from "../../mongo/methods/findDocuments";

export const getPostsByUserId = async (userId: string) => {
 const response = await findDocuments({ collectionName: 'Posts', query: { filter: { $eq: { userId } }}})

 return response.filter(({ userId: thisPostUserId }) => thisPostUserId === userId);
}