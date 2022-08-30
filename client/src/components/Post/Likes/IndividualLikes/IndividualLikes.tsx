import { Like } from '../../../../../../shared/src/models'
import IndividualLike from './IndividualLike'

const IndividualLikes = ({ likes }: { likes: Like[] }) => {
  return (
    <div className="ml-4 flex">
      {likes.map(({ createdBy }, index) => (
        <IndividualLike
          createdBy={createdBy}
          key={createdBy}
          zIndex={likes.length - index}
        />
      ))}
    </div>
  )
}

export default IndividualLikes
