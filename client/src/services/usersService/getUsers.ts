import { axios } from 'services'
import { User as UserType } from '../../../../shared/src/index'

export const getUsers = async () => {
  const response = await axios.get<UserType[]>('/users')

  return response.data
}
