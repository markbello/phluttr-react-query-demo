import { Link } from 'react-router-dom'
import {
  User as UserType,
  Post as PostType
} from '../../../../shared/src/models'
import AddFriendIcon from './AddFriendIcon'
import Likes from './Likes'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import { addFollower } from 'services/usersService/addFollower'

const Post = ({ user, post }: { user: UserType; post: PostType }) => {
  const loggedInSlug = useSelector(
    (state: RootState) => state.appState.loggedInAs
  )

  const handleAddFollower = async () => {
    await addFollower({
      followeeSlug: post.createdBy,
      followerSlug: loggedInSlug
    })
  }

  return (
    <div className="rounded-xl bg-white pt-8 shadow-md">
      <div className="px-8">
        <div className="flex justify-between">
          <Link className="w-full cursor-pointer" to={`/users/${user.slug}`}>
            <div className="flex">
              <img
                src={user.profilePicture[64]}
                className="h-16 w-16 rounded-full"
              />
              <div className="ml-4">
                <div className="font-semibold">
                  {user.firstName} {user.lastName}
                </div>
                <div>{new Date(post.createdAt).toLocaleString()}</div>
              </div>
            </div>
          </Link>
          {!user.followers.find(({ slug }) => slug === loggedInSlug) && (
            <button
              className="flex items-center whitespace-nowrap"
              onClick={handleAddFollower}
            >
              <AddFriendIcon />
              <div className="ml-2 text-sm">Follow</div>
            </button>
          )}
        </div>
        <div className="my-4">{post.text}</div>
      </div>
      <div className="flex rounded-b-xl border-t px-8 py-4">
        <Likes likes={post.likes} postId={post._id!} />
      </div>
    </div>
  )
}

export default Post
