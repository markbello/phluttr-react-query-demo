import LoadingWrapper from 'components/LoadingWrapper'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPostsForUser } from 'services/postsService'
import { getUserById } from 'services/usersService'
import { User } from '../../../../shared/src/models'
import { Post as PostType } from '../../../../shared/src/models/Post'
import Post from 'components/Post'

const SingleUser = () => {
  const { userId = '' } = useParams<{ userId: string }>()
  const [posts, setPosts] = useState<PostType[]>([])
  const [user, setUser] = useState<User>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hydrate = async () => {
      const posts = await getPostsForUser(userId)
      setPosts(posts)

      const user = await getUserById(userId)
      setUser(user)

      setIsLoading(false)
    }
    hydrate()
  }, [userId])

  return (
    <LoadingWrapper loadStatuses={isLoading ? ['loading'] : ['success']}>
      <div className="block">
        <div className="w-full">
          <div className="m-8 flex grow rounded-xl bg-white p-8 shadow-md">
            <img
              src={user?.profilePicture[512]}
              className="h-48 w-48 rounded-full"
            />
            <h1 className="ml-16 text-4xl font-bold">
              {user?.firstName} {user?.lastName}
            </h1>
          </div>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div className="col-span-1 mx-8 mt-4 md:col-span-2" key={post._id}>
            <Post post={post} user={user!} />
          </div>
        ))}
      </div>
    </LoadingWrapper>
  )
}

export default SingleUser
