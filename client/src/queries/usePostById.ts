import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getPostById } from 'services/postsService/gotPostById'
import { Post } from '../../../shared/src/models'
import { QueryKeys } from './queryKeys'
import { usePosts } from './usePosts'
import { usePostsByUser } from './usePostsByUser'

export const usePostById = (id: string) => {
  const queryKey = [QueryKeys.GetPostById, id]
  const baseQuery = useQuery(queryKey, () => getPostById(id), {
    enabled: !!id
  })

  const queryClient = useQueryClient()
  const { data: post = {} as Post } = baseQuery

  const { data: allPosts = [] as Post[] } = usePosts()
  const { data: allPostsByCreator = [] as Post[] } = usePostsByUser(
    post.createdBy
  )

  const updatePost = (updatesToPost: Partial<Post>) => {
    // Update This User cache
    queryClient.setQueryData(queryKey, (currentPost: Post = {} as Post) => ({
      ...currentPost,
      ...updatesToPost
    }))

    const updatedPost: Post = { ...post, ...updatesToPost }

    // Update the All Posts cache
    const indexOfThisPostInAllPosts = allPosts.findIndex(
      ({ _id: idFromAllPosts }) => idFromAllPosts === id
    )
    const updatedAllPosts = [...allPosts]
    updatedAllPosts[indexOfThisPostInAllPosts] = updatedPost

    // Update the Posts by User cache
    const indexOfThisPostInPostsByUser = allPosts.findIndex(
      ({ _id: idFromAllPosts }) => idFromAllPosts === id
    )
    const updatedPostsByUser = [...allPostsByCreator]
    updatedPostsByUser[indexOfThisPostInPostsByUser] = updatedPost
  }

  return { ...baseQuery, updatePost }
}
