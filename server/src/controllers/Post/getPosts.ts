import { fetchAllDocuments } from "../../mongo/methods/fetchAllDocuments";

export const getPosts = async (userId: string) => {
 const response = await fetchAllDocuments({ collectionName: 'Posts', matches: [{ userId }], limit: 1000 })

 return response;
}