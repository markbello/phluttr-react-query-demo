import { axios } from 'services'

export const getPostById = async (id: string) => {
  const response = await axios.get(`/posts/${id}`)

  return response.data
}
