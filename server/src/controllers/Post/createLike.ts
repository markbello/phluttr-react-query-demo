import { ObjectId } from "mongodb"
import { addMonths } from 'date-fns'
import { updateDocument } from "../../mongo/methods/updateDocument"
import { Post } from '../../../../shared/src/models'

export const createLike = async (postId: string, createdBy: string) => {
  const postResponse = await updateDocument<Post>({ collectionName: 'Posts', filter: { _id: new ObjectId(postId) }, data: { $push: { likes: {
    createdBy,
    createdAt: new Date().toISOString()
  } }} })

  return postResponse;
}