import { useQuery } from '@tanstack/react-query'
import { getUsers } from 'services/usersService'
import { QueryKeys } from './queryKeys'

export const useUsers = () => useQuery([QueryKeys.GetUsers], () => getUsers())
