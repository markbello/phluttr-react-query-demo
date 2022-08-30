import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getUsers } from 'services/usersService'
import { User } from '../../../shared/src/models'
import { QueryKeys } from './queryKeys'

export const useUsers = () => {
  const baseQuery = useQuery([QueryKeys.GetUsers], () => getUsers())

  const queryClient = useQueryClient()

  // automatically hydrate user queries for each user
  const { data: allUsers = [] as User[] } = baseQuery
  useEffect(() => {
    allUsers.forEach((user) => {
      queryClient.setQueryData([QueryKeys.GetUser, user.slug], () => user)
    })
  }, [allUsers.length])

  return baseQuery
}
