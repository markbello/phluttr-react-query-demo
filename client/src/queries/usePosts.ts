import { useQuery } from '@tanstack/react-query'
import { getPosts } from 'services/postsService'
import { QueryKeys } from './queryKeys'

export const usePosts = () => useQuery([QueryKeys.GetPosts], () => getPosts())
