import User from 'components/User'
import { useEffect, useState } from 'react'
import { getUsers } from 'services/usersService'
import { User as UserType } from '../../../../shared/src/index'

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    const hydrate = async () => {
      const response = await getUsers()
      setUsers(response)
    }
    hydrate()
  }, [])

  return users.map((user) => <User user={user} key={user.id + user.birthday} />)
}

export default Users
