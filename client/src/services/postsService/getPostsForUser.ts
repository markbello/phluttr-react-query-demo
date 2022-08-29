import { axios } from 'services'
import { Post } from '../../../../shared/src/models/Post'

export const getPostsForUser = async (userId: string) => {
  const response = await axios.get<Post[]>(`/posts/${userId}`)

  return response.data
}
