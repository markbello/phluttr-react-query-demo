import { Post, User } from '../../../../shared/src'

type SortFunction<T> = (a: T, b: T) => number

export const getSortFunctions = (
  currentUserSlug: string,
  users: User[]
): SortFunction<Post>[] => {
  if (!currentUserSlug || !users || users.length === 0) {
    return []
  }

  const thisUser: User = users.find(({ slug }) => slug === currentUserSlug)!

  const sortByLikes: SortFunction<Post> = (a, b) =>
    b.likes.length - a.likes.length

  const sortByFollowing: SortFunction<Post> = (a, b) => {
    const postCreatorA = users.find(({ slug }) => slug === a.createdBy)!
    const postCreatorB = users.find(({ slug }) => slug === b.createdBy)!

    if (
      thisUser.following.find(({ slug }) => slug === postCreatorA.slug) &&
      thisUser.following.find(({ slug }) => slug === postCreatorB.slug)
    ) {
      return 0
    }
    if (
      thisUser.following.find(({ slug }) => slug === postCreatorA.slug) &&
      !thisUser.following.find(({ slug }) => slug === postCreatorB.slug)
    ) {
      return 1
    }
    if (
      !thisUser.following.find(({ slug }) => slug === postCreatorA.slug) &&
      thisUser.following.find(({ slug }) => slug === postCreatorB.slug)
    ) {
      return -1
    }

    return 0
  }

  const sortByFollowers: SortFunction<Post> = (a, b) => {
    const userA = users.find(({ slug }) => slug === a.createdBy)!
    const userB = users.find(({ slug }) => slug === b.createdBy)!

    return userB?.followers.length - userA?.followers.length
  }

  return [sortByFollowing, sortByLikes, sortByFollowers]
}
