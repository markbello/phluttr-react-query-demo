import { fetchAllDocuments } from "../../mongo/methods/fetchAllDocuments";
import { findDocuments } from "../../mongo/methods/findDocuments";

export const getPosts = async (userId: string) => {
 const response = await findDocuments({ collectionName: 'Posts', query: { filter: { $eq: { userId } }}})

 return response.sort(() => { return 0.5 - Math.random() });
}