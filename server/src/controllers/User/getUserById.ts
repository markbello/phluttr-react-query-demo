import { ObjectId } from "mongodb";
import { findDocument } from "../../mongo/methods/findDocument";

export const getUserById = async (slug: string) => {
 const response = await findDocument({ collectionName: 'Users', query: { slug } })

 return response;
}