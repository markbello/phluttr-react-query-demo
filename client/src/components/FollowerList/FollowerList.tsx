import LoadingWrapper from 'components/LoadingWrapper'
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

  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm">
      <h3 className="text-xl font-semibold">
        {direction === 'user-following' ? 'Following' : 'Followers'}
      </h3>
      <div className="mt-4">
        <LoadingWrapper loadStatuses={isLoading ? ['loading'] : ['success']}>
          {relatedUsers.length === 0 ? (
            <div className="text-sm italic">
              {direction === 'following-user'
                ? 'Looks like no one is following you yet. (Tip: Ask your grandkids to follow you first!)'
                : "Looks like you're not following anyone yet. Click the Follow button next to a post to follow someone!"}
            </div>
          ) : (
            relatedUsers.map((follower) => (
              <FollowerUser key={follower.slug} slug={follower.slug} />
            ))
          )}
        </LoadingWrapper>
      </div>
    </div>
  )
}

export default FollowerList
