import { axios } from 'services'
import { Post } from '../../../../shared/src/models'

export const getPosts = async () => {
  const response = await axios.get<Post[]>(`/posts`)

  return response.data
}
