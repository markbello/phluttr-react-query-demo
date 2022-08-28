import { Impact } from "./PriorityModifier"
import { AffectedParty } from "./User"

export interface Transaction {
  impact: Impact
  date: string
  dollarValue: number
  variant: 'BALANCE_REFILL' | 'USER_ENGAGEMENT'
  meta?: {
    affectedParties: AffectedParty[]
  }
}