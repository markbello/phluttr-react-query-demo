import { useUserBySlug } from 'queries/useUserBySlug'
import { User } from '../../../../../../../shared/src/models'

const IndividualLike = ({
  createdBy,
  zIndex
}: {
  createdBy: string
  zIndex: number
}) => {
  const { data: createdByUser = {} as User } = useUserBySlug(createdBy)

  return (
    <>
      {createdByUser.profilePicture && (
        <img
          src={createdByUser.profilePicture[32]}
          className="-ml-2 h-8 w-8 rounded-full"
          style={{ zIndex }}
        />
      )}
    </>
  )
}

export default IndividualLike
