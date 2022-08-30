import { compareDesc } from "date-fns";
import { Post } from "../../../../shared/src/models";
import { findDocuments } from "../../mongo/methods/findDocuments";

export const getPosts = async (userId: string) => {
 const response = await findDocuments<Post>({ collectionName: 'Posts', query: { filter: { $eq: { userId } }}})

 return response.sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)));
}