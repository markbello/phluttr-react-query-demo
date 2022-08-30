import { useLoggedInUserSlug } from 'hooks/useLoggedInUserSlug'
import { addFollower } from 'services/usersService/addFollower'
import { Post, User } from '../../../../../shared/src'
import AddFriendIcon from './AddFriendIcon'
import StarIcon from './StarIcon'

const FollowersButton = ({ user, post }: { user: User; post: Post }) => {
  const loggedInSlug = useLoggedInUserSlug()

  const handleAddFollower = async () => {
    await addFollower({
      followeeSlug: post.createdBy,
      followerSlug: loggedInSlug
    })
  }

  return user.followers.find(({ slug }) => slug === loggedInSlug) ? (
    <div className="flex items-center whitespace-nowrap">
      <StarIcon />
      <div className="ml-2 text-sm">Following</div>
    </div>
  ) : (
    <button
      className="flex items-center whitespace-nowrap"
      onClick={handleAddFollower}
    >
      <AddFriendIcon />
      <div className="ml-2 text-sm">Follow</div>
    </button>
  )
}

export default FollowersButton
