import { axios } from 'services'

export const sendLike = async ({
  postId,
  createdBy
}: {
  postId: string
  createdBy: string
}) => {
  return await axios.post(`/posts/${postId}/likes`, {
    createdBy
  })
}
