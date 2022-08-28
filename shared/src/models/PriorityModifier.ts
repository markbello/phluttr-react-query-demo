export type Impact = 'ADDITIVE' | 'DEDUCTIVE'

export interface PriorityModifier {
  variant: 'PAID' | 'LIKE' | 'COMMENT'
  sentiment: number // 0-100
  expirationDate: string
  dollarValue: string
  weight: number // 0-100
  impact: Impact
}