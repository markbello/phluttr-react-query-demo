import LoadingWrapper from 'components/LoadingWrapper'
import { useLoggedInUserSlug } from 'hooks/useLoggedInUserSlug'
import { useEffect, useState } from 'react'
import { getUsers } from 'services/usersService'
import { User as UserType } from '../../../../shared/src/models'

import FollowerUser from './FollowerUser'

const FollowerList = ({
  direction,
  slug
}: {
  slug: string
  direction: 'following-user' | 'user-following'
}) => {
  const loggedInUserSlug = useLoggedInUserSlug()

  const [users, setUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hydrate = async () => {
      const users = await getUsers()
      setUsers(users)

      setIsLoading(false)
    }
    hydrate()
  }, [])

  const thisUser =
    users.find(({ slug: thisSlug }) => thisSlug === slug) || ({} as UserType)
  const relatedUsers =
    (direction === 'following-user'
      ? thisUser?.followers
      : thisUser?.following) || []

  const noItemsSecondPersonMessage =
    direction === 'following-user'
      ? 'Looks like no one is following you yet. (Tip: Ask your grandkids to follow you first!)'
      : "Looks like you're not following anyone yet. Click the Follow button next to a post to follow someone!"
  const noItemsThirdPersonMessage =
    direction === 'following-user'
      ? `Looks like no one is following ${thisUser.firstName} yet.  Click the Follow button next to one of their posts to be the first!`
      : `Looks like ${thisUser.firstName} is not following anyone yet.`

  const noItemsMessage =
    loggedInUserSlug === slug
      ? noItemsSecondPersonMessage
      : noItemsThirdPersonMessage

  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm">
      <h3 className="text-xl font-semibold">
        {direction === 'user-following' ? 'Following' : 'Followers'}
      </h3>
      <div className="mt-4">
        <LoadingWrapper loadStatuses={isLoading ? ['loading'] : ['success']}>
          {relatedUsers.length === 0 ? (
            <div className="text-sm italic">{noItemsMessage}</div>
          ) : (
            relatedUsers.map((follower) => (
              <div className="my-2" key={follower.slug}>
                <FollowerUser slug={follower.slug} />
              </div>
            ))
          )}
        </LoadingWrapper>
      </div>
    </div>
  )
}

export default FollowerList
