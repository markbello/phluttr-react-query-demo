import { axios } from 'services'
import { User as UserType } from '../../../../shared/src/index'

export const getUserById = async (userId: string) => {
  const response = await axios.get<UserType>(`/users/${userId}`)

  return response.data
}
