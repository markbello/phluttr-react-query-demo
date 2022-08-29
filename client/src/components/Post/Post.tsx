import { Link } from 'react-router-dom'
import {
  User as UserType,
  Post as PostType
} from '../../../../shared/src/models'

const Post = ({ user, post }: { user: UserType; post: PostType }) => {
  return (
    <div className="rounded-xl bg-white p-8 shadow-md">
      <div className="flex">
        <img src={user.profilePicture[32]} className="h-12 w-12 rounded-full" />
        <div className="ml-4">
          <div className="font-semibold">
            <Link className="w-full cursor-pointer" to={`/users/${user.slug}`}>
              {user.firstName} {user.lastName}
            </Link>
          </div>
          <div>{new Date(post.createdAt).toLocaleString()}</div>
        </div>
      </div>
      <div className="mt-8">{post.text}</div>
    </div>
  )
}

export default Post
