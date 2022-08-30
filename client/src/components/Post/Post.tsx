import { Link } from 'react-router-dom'
import {
  User as UserType,
  Post as PostType
} from '../../../../shared/src/models'
import Likes from './Likes'
import BadgeIcon from './BadgeIcon'
import { useLoggedInUserSlug } from 'hooks/useLoggedInUserSlug'
import FollowersButton from './FollowersButton'

const Post = ({ user, post }: { user: UserType; post: PostType }) => {
  const loggedInSlug = useLoggedInUserSlug()

  return (
    <div
      className={`rounded-xl bg-white pt-8 shadow-md ${
        loggedInSlug === post.createdBy ? 'pb-4' : ''
      }`}
    >
      <div className="px-8">
        <div className="flex justify-between">
          <Link className="w-full cursor-pointer" to={`/users/${user.slug}`}>
            <div className="flex">
              <img
                src={user.profilePicture[64]}
                className="h-16 w-16 rounded-full"
              />
              <div className="ml-4">
                <div className="flex items-center">
                  <div className="text-lg font-semibold">
                    {user.firstName} {user.lastName}
                  </div>
                  {user.followers.length > 5 && (
                    <div className="ml-2 text-blue-500">
                      <BadgeIcon />
                    </div>
                  )}
                </div>
                <div>{new Date(post.createdAt).toLocaleString()}</div>
              </div>
            </div>
          </Link>
          {loggedInSlug !== post.createdBy && (
            <FollowersButton user={user} post={post} />
          )}
        </div>
        <div className="my-4">{post.text}</div>
      </div>
      {post.createdBy !== loggedInSlug && (
        <div className="flex rounded-b-xl border-t px-8 py-4">
          <Likes likes={post.likes} postId={post._id!} />
        </div>
      )}
    </div>
  )
}

export default Post
