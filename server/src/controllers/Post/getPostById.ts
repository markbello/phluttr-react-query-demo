import { ObjectId } from "mongodb";
import { findDocument } from "../../mongo/methods/findDocument";

export const getPostById = async (id: string) => {
 const response = await findDocument({ collectionName: 'Posts', query: { _id: new ObjectId(id) } })

 return response;
}