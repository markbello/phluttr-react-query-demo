import LoadingWrapper from 'components/LoadingWrapper'
import { Link } from 'react-router-dom'
import { User as UserType } from '../../../../../shared/src/models'
import { useUserBySlug } from 'queries/useUserBySlug'

const FollowerUser = ({ slug }: { slug: string }) => {
  const { data: user = {} as UserType, status: userStatus } =
    useUserBySlug(slug)

  return (
    <LoadingWrapper loadStatuses={[userStatus]}>
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
