import LoadingWrapper from 'components/LoadingWrapper'
import User from 'components/User'
import { useUsers } from 'queries/useUsers'
import { Link } from 'react-router-dom'
import { User as UserType } from '../../../../shared/src/index'

const Users = () => {
  const { data: users = [] as UserType[], status: usersStatus } = useUsers()

  return (
    <LoadingWrapper loadStatuses={[usersStatus]}>
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
