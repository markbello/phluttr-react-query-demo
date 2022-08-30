import { Link } from 'react-router-dom'
import { axios } from 'services'
import {
  User as UserType,
  Post as PostType
} from '../../../../shared/src/models'
import LikeIcon from './LikeIcon'

const Post = ({ user, post }: { user: UserType; post: PostType }) => {
  const sendLike = async () => {
    await axios.post(`/posts/${post._id}/likes`, {
      createdBy: user.slug
    })
  }

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
        <button className="flex items-center" onClick={sendLike}>
          <LikeIcon className="h-6 w-6" />
          <div className="ml-2 text-sm">
            {post.likes.length === 0 && 'Be the first to like this'}
          </div>
        </button>
      </div>
    </div>
  )
}

export default Post
