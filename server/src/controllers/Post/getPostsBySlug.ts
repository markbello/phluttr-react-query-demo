import { fetchAllDocuments } from "../../mongo/methods/fetchAllDocuments";
import { findDocuments } from "../../mongo/methods/findDocuments";

export const getPostsBySlug = async (slug: string) => {
 const response = await findDocuments({ collectionName: 'Posts', query: { filter: { $eq: { slug } }}})

 return response.filter(({ createdBy }) => createdBy === slug);
}