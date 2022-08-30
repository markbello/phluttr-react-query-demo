import { axios } from 'services'

export const addFollower = async ({
  followerSlug,
  followeeSlug
}: {
  followerSlug: string
  followeeSlug: string
}) => {
  const response = await axios.post(`/users/${followeeSlug}/followers`, {
    followerSlug
  })

  return response
}
