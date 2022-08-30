import { Follower, User } from "../../../../shared/src/models";
import { updateDocument } from "../../mongo/methods/updateDocument";

export const createFollower = async ({ followerSlug, followeeSlug }: { followerSlug: string; followeeSlug: string }) => {
  const personToBeFollowed: Follower = {
    slug: followeeSlug,
    priorityModifiers: [],
    status: 'ACTIVE_PUBLIC'
  }
  
  const personFollowing: Follower = {
    slug: followerSlug,
    priorityModifiers: [],
    status: 'ACTIVE_PUBLIC'
  }
  
  return Promise.all([
    await updateDocument<User>({ collectionName: 'Users', filter: { slug: followerSlug }, data: { $push: { following: personToBeFollowed }} }),
    await updateDocument<User>({ collectionName: 'Users', filter: { slug: followeeSlug }, data: { $push: { followers: personFollowing }} })
  ])
}