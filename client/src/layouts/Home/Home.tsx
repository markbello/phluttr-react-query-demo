import LoadingWrapper from 'components/LoadingWrapper'
import Post from 'components/Post'
import { useEffect, useState } from 'react'
import { getPosts } from 'services/postsService/getPosts'
import { getUsers } from 'services/usersService'
import { User } from '../../../../shared/src/models'
import { Post as PostType } from '../../../../shared/src/models/Post'
import FollowerList from '../../components/FollowerList'
import type { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

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

  const loggedInSlug = useSelector(
    (state: RootState) => state.appState.loggedInAs
  )

  return (
    <LoadingWrapper loadStatuses={isLoading ? ['loading'] : ['success']}>
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          {posts.map((post) => (
            <div className="mb-4" key={post._id}>
              <Post
                post={post}
                user={users.find(({ slug }) => slug === post.createdBy)!}
              />
            </div>
          ))}
        </div>
        <div className="hidden md:col-span-1 md:block">
          <div className="mb-4">
            <FollowerList direction="user-following" slug={loggedInSlug} />
          </div>
          <FollowerList direction="following-user" slug={loggedInSlug} />
        </div>
      </div>
    </LoadingWrapper>
  )
}

export default Home
