import LoadingWrapper from 'components/LoadingWrapper'
import User from 'components/User'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

  return (
    <LoadingWrapper
      loadStatuses={users.length === 0 ? ['loading'] : ['success']}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {users.map((user) => (
          <Link to={`/users/${user.slug}`} key={user._id + user.birthday}>
            <User user={user} />
          </Link>
        ))}
      </div>
    </LoadingWrapper>
  )
}

export default Users
