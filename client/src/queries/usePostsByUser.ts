import { useQuery } from '@tanstack/react-query'
import { getPostsForUser } from 'services/postsService'
import { QueryKeys } from './queryKeys'

export const usePostsByUser = (slug: string) =>
  useQuery([QueryKeys.GetPostsByUser], () => getPostsForUser(slug))
