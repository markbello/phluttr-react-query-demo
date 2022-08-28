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
  profilePictureUrl: string
  gender: Gender
  transactions: Transaction[]
  id?: string
  _id: string
}

export interface AffectedParty {
  id: string
  priorityModifier: PriorityModifier
}