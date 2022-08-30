import LoadingWrapper from 'components/LoadingWrapper'
import { useEffect, useState } from 'react'
import { getUserById } from 'services/usersService'
import { Link } from 'react-router-dom'
import { User as UserType } from '../../../../../shared/src/models'

const FollowerUser = ({ slug }: { slug: string }) => {
  const [user, setUser] = useState<UserType>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hydrate = async () => {
      const users = await getUserById(slug)
      setUser(users)

      setIsLoading(false)
    }
    hydrate()
  }, [])

  return (
    <LoadingWrapper loadStatuses={isLoading ? ['loading'] : ['success']}>
      <Link className="flex items-center" to={`/users/${user?.slug}`}>
        <img
          src={user?.profilePicture[64]}
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{`${user?.firstName} ${user?.lastName}`}</h2>
        </div>
      </Link>
    </LoadingWrapper>
  )
}

export default FollowerUser
