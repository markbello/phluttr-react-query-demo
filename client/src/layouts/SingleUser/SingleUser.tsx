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
          <div className="m-8 flex rounded-xl bg-white p-8 shadow-md">
            <img
              src={user?.profilePictureUrl.replace('/thumb', '')}
              className="h-48 w-48 rounded-full"
            />
            <h1 className="ml-16 text-4xl font-bold">
              {user?.firstName} {user?.lastName}
            </h1>
          </div>
        </div>
        <div className="mx-8 mt-4">
          {posts.map((post) => (
            <Post post={post} user={user!} key={post._id} />
          ))}
        </div>
      </div>
    </LoadingWrapper>
  )
}

export default SingleUser
