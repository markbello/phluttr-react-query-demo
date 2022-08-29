import { ObjectId } from "mongodb";
import { findDocument } from "../../mongo/methods/findDocument";

export const getUserById = async (userId: string) => {
 const response = await findDocument({ collectionName: 'Users', query: { _id: new ObjectId(userId) } })

 return response;
}