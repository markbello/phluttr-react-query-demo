import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getUserById } from 'services/usersService'
import { User } from '../../../shared/src/models'
import { QueryKeys } from './queryKeys'
import { useUsers } from './useUsers'

export const useUserBySlug = (slug: string) => {
  const queryKey = [QueryKeys.GetUser, slug]
  const baseQuery = useQuery(queryKey, () => getUserById(slug), {
    enabled: !!slug
  })

  const queryClient = useQueryClient()
  const { data: user = {} as User } = baseQuery

  const { data: allUsers = [] as User[] } = useUsers()

  const updateUser = (updatesToUser: Partial<User>) => {
    // Update This User cache
    queryClient.setQueryData(queryKey, (currentUser: User = {} as User) => ({
      ...currentUser,
      ...updatesToUser
    }))

    // Update the All Users cache
    const indexOfThisUser = allUsers.findIndex(
      ({ slug: slugFromAllUsers }) => slugFromAllUsers === slug
    )
    const updatedUser: User = { ...user, ...updatesToUser }
    const updatedAllUsers = [...allUsers]
    updatedAllUsers[indexOfThisUser] = updatedUser
  }

  return { ...baseQuery, updateUser }
}
