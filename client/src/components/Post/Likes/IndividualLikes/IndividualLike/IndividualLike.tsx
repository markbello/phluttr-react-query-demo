import { useEffect, useState } from 'react'
import { getUserById } from 'services/usersService'
import { User } from '../../../../../../../shared/src/models'

const IndividualLike = ({
  createdBy,
  zIndex
}: {
  createdBy: string
  zIndex: number
}) => {
  const [createdByUser, setCreatedByUser] = useState<User>()

  useEffect(() => {
    const hydrate = async () => {
      const user = await getUserById(createdBy)
      setCreatedByUser(user)
    }
    hydrate()
  }, [createdBy])

  return (
    <>
      {createdByUser && (
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
