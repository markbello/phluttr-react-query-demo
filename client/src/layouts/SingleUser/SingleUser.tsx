import LoadingWrapper from 'components/LoadingWrapper'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { User } from '../../../../shared/src/models'
import { Post as PostType } from '../../../../shared/src/models/Post'
import Post from 'components/Post'
import FollowerList from 'components/FollowerList'
import { sortBy, shuffle } from 'lodash'
import { useLoggedInUserSlug } from 'hooks/useLoggedInUserSlug'
import UserCircle from './UserCircle'
import { useDispatch } from 'react-redux'
import { setLoggedInAs } from '../../redux/appState'
import { usePostsByUser } from 'queries/usePostsByUser'
import { useUserBySlug } from 'queries/useUserBySlug'

const SingleUser = () => {
  const { userId = '' } = useParams<{ userId: string }>()
  const [leadingPost, setLeadingPost] = useState<PostType>()

  const { data: posts = [] as PostType[], status: postsStatus } =
    usePostsByUser(userId)
  const { data: user = {} as User, status: userStatus } = useUserBySlug(userId)

  useEffect(() => {
    if (!leadingPost && posts.length > 0) {
      const [newLeadingPost] = posts.every(({ likes }) => likes.length === 0)
        ? shuffle(posts)
        : sortBy(posts, ({ likes }) => likes.length)

      setLeadingPost(newLeadingPost)
    }
  }, [posts])

  const loggedInSlug = useLoggedInUserSlug()
  const dispatch = useDispatch()

  return (
    <LoadingWrapper loadStatuses={[postsStatus, userStatus]}>
      <div className="block" key={userId}>
        <div className="w-full">
          <div className="m-8 flex grow rounded-xl bg-white p-8 shadow-md">
            <img
              src={user?.profilePicture[512]}
              className="h-48 w-48 rounded-full"
            />
            <div className="ml-16">
              <div className="flex justify-between">
                <h1 className="text-4xl font-bold">
                  {user?.firstName} {user?.lastName}
                </h1>
                {loggedInSlug !== user?.slug && (
                  <button
                    className="flex items-center"
                    onClick={() => dispatch(setLoggedInAs(user?.slug || ''))}
                  >
                    <UserCircle />
                    <p className="ml-2">Log In as User</p>
                  </button>
                )}
              </div>
              <p className="mt-2 text-xl text-gray-400">
                {`Age ${
                  new Date().getFullYear() -
                  new Date(user?.birthday || '').getFullYear()
                } - ${user?.followers.length} ${
                  user?.followers.length === 1 ? 'Follower' : 'Followers'
                }`}
              </p>
              <p className="mt-8 text-xl">{leadingPost?.text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 ml-8 lg:col-span-2 ">
          {posts.map((post) => (
            <div className="mt-4" key={post._id}>
              <Post post={post} user={user!} />
            </div>
          ))}
        </div>
        <div className="mr-8 hidden md:col-span-1 md:block">
          <div className="my-4">
            <FollowerList direction="user-following" slug={user?.slug || ''} />
          </div>
          <FollowerList direction="following-user" slug={user?.slug || ''} />
        </div>
      </div>
    </LoadingWrapper>
  )
}

export default SingleUser
