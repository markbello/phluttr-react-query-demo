import { Post } from "./Post"
import { PriorityModifier } from "./PriorityModifier"
import { Transaction } from "./Transaction"

export type Gender = 'MALE' | 'FEMALE' | 'NON_BINARY' | 'UNDISCLOSED'

interface Follower {
  id: string
  priorityModifiers: PriorityModifier[]
  status: 'ACTIVE_PUBLIC' | 'ACTIVE_SHADOW' | 'INACTIVE' | 'BLOCKED'
}

export interface User {
  firstName: string
  lastName: string
  birthday: string
  followers: Follower[]
  following: Follower[]
  profilePicture: {
    32: string;
    64: string;
    128: string;
    256: string;
    512: string;
  };
  gender: Gender
  transactions: Transaction[]
  id?: string
  _id?: string
  slug: string;
  posts: Post[]
}

export interface AffectedParty {
  id: string
  priorityModifier: PriorityModifier
}