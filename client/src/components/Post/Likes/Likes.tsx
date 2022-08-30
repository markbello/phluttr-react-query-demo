import { sendLike } from 'services/postsService'
import { Like } from '../../../../../shared/src/models'
import LikeIcon from './LikeIcon'
import type { RootState } from '../../../redux/store'
import { useSelector } from 'react-redux'
import IndividualLikes from './IndividualLikes'

const Likes = ({ likes, postId }: { likes: Like[]; postId: string }) => {
  const loggedInSlug = useSelector(
    (state: RootState) => state.appState.loggedInAs
  )

  return (
    <button
      className="flex items-center"
      onClick={async () => await sendLike({ postId, createdBy: loggedInSlug })}
    >
      <LikeIcon className="h-6 w-6" />
      {likes.length === 0 ? (
        <div className="ml-2 text-sm">Be the first to like this</div>
      ) : (
        <IndividualLikes likes={likes} />
      )}
    </button>
  )
}

export default Likes
