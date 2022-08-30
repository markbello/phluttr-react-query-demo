import { Link } from 'react-router-dom'
import {
  User as UserType,
  Post as PostType
} from '../../../../shared/src/models'
import Likes from './Likes'

const Post = ({ user, post }: { user: UserType; post: PostType }) => {
  return (
    <div className="rounded-xl bg-white pt-8 shadow-md">
      <div className="px-8">
        <div className="flex">
          <img
            src={user.profilePicture[64]}
            className="h-16 w-16 rounded-full"
          />
          <div className="ml-4">
            <div className="font-semibold">
              <Link
                className="w-full cursor-pointer"
                to={`/users/${user.slug}`}
              >
                {user.firstName} {user.lastName}
              </Link>
            </div>
            <div>{new Date(post.createdAt).toLocaleString()}</div>
          </div>
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
