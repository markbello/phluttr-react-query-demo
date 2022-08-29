import LoadingWrapper from 'components/LoadingWrapper'
import Post from 'components/Post'
import { useEffect, useState } from 'react'
import { getPosts } from 'services/postsService/getPosts'
import { getUsers } from 'services/usersService'
import { User } from '../../../../shared/src/models'
import { Post as PostType } from '../../../../shared/src/models/Post'

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hydrate = async () => {
      const posts = await getPosts()
      setPosts(posts)

      const users = await getUsers()
      setUsers(users)

      setIsLoading(false)
    }
    hydrate()
  }, [])

  return (
    <LoadingWrapper loadStatuses={isLoading ? ['loading'] : ['success']}>
      <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Post
            key={post._id}
            post={post}
            user={users.find(({ _id }) => _id === post.userId)!}
          />
        ))}
      </div>
    </LoadingWrapper>
  )
}

export default Home
