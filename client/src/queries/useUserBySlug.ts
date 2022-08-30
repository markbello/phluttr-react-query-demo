import { useQuery } from '@tanstack/react-query'
import { getUserById } from 'services/usersService'
import { QueryKeys } from './queryKeys'

export const useUserBySlug = (slug: string) =>
  useQuery([QueryKeys.GetUser], () => getUserById(slug))
