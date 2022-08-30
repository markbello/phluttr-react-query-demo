import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getPosts } from 'services/postsService'
import { Post } from '../../../shared/src/models'
import { QueryKeys } from './queryKeys'

export const usePosts = () => {
  const baseQuery = useQuery([QueryKeys.GetPosts], () => getPosts())

  const queryClient = useQueryClient()

  // automatically hydrate posts for individual users, and for individual posts
  const { data: allPosts = [] as Post[] } = baseQuery
  useEffect(() => {
    allPosts.forEach((post) => {
      queryClient.setQueryData(
        [QueryKeys.GetPostsByUser, post.createdBy],
        (currentPosts: Post[] = []) => [...currentPosts, post]
      )

      queryClient.setQueryData([QueryKeys.GetPostById, post._id], () => post)
    })
  }, [allPosts, allPosts.length, queryClient])

  return baseQuery
}
