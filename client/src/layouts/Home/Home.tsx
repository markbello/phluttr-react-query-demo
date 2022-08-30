import LoadingWrapper from 'components/LoadingWrapper'
import Post from 'components/Post'
import { User } from '../../../../shared/src/models'
import { Post as PostType } from '../../../../shared/src/models/Post'
import FollowerList from '../../components/FollowerList'
import type { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import { getSortFunctions } from './sortFunctions'
import { usePosts } from 'queries/usePosts'
import { useUsers } from 'queries/useUsers'

const Home = () => {
  const { data: posts = [] as PostType[], status: postsStatus } = usePosts()
  const { data: users = [] as User[], status: usersStatus } = useUsers()

  const loggedInSlug = useSelector(
    (state: RootState) => state.appState.loggedInAs
  )

  const filteredPosts = posts.filter(
    ({ createdBy }) => createdBy !== loggedInSlug
  )

  // let sortedPosts = [...filteredPosts]
  const sortFns = getSortFunctions(loggedInSlug, users)
  // sortFns.forEach((sortFn) => {
  //   sortedPosts = sortedPosts.sort(sortFn)
  // })
  const sortedPosts = filteredPosts.sort((a, b) => {
    let result = 0

    sortFns.forEach((sortFn) => {
      result = sortFn(a, b)
    })

    return result
  })

  return (
    <LoadingWrapper loadStatuses={[postsStatus, usersStatus]}>
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          {sortedPosts.map((post) => (
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
