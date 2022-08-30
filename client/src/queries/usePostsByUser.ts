import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getPostsForUser } from 'services/postsService'
import { Post } from '../../../shared/src/models'
import { QueryKeys } from './queryKeys'
import { usePosts } from './usePosts'

export const usePostsByUser = (slug: string) => {
  const queryKey = [QueryKeys.GetPostsByUser, slug]
  const baseQuery = useQuery(queryKey, () => getPostsForUser(slug))

  const queryClient = useQueryClient()

  // automatically hydrate posts for All Users cache, and individual users
  const { data: allPostsForUser = [] as Post[] } = baseQuery
  const { data: allPosts = [] as Post[] } = usePosts()

  useEffect(() => {
    allPostsForUser.forEach((post) => {
      const indexOfThisPostInAllPosts = allPosts.findIndex(
        ({ _id: idFromAllPosts }) => idFromAllPosts === post._id
      )
      const updatedPost = { ...allPosts[indexOfThisPostInAllPosts], ...post }
      const updatedAllPosts = [...allPosts]
      allPosts[indexOfThisPostInAllPosts] = updatedPost
      queryClient.setQueryData([QueryKeys.GetPosts], () => updatedAllPosts)

      queryClient.setQueryData([QueryKeys.GetPostById, post._id], () => post)
    })
  }, [allPosts.length, allPostsForUser.length])

  return baseQuery
}
