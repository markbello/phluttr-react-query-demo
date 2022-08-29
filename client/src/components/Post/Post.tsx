import {
  User as UserType,
  Post as PostType
} from '../../../../shared/src/models'

const Post = ({ user, post }: { user: UserType; post: PostType }) => {
  return (
    <div className="rounded-xl bg-white p-8 shadow-md">
      <div className="flex">
        <img src={user.profilePictureUrl} className="h-12 w-12 rounded-full" />
        <div className="ml-4">
          <div className="font-semibold">
            {user.firstName} {user.lastName}
          </div>
          <div>{new Date(post.createdAt).toLocaleString()}</div>
        </div>
      </div>
      <div className="mt-2">{post.text}</div>
    </div>
  )
}

export default Post
