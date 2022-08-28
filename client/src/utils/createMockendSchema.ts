import { faker } from '@faker-js/faker'

type Impact = 'ADDITIVE' | 'DEDUCTIVE'

interface PriorityModifier {
  variant: 'PAID' | 'LIKE' | 'COMMENT'
  sentiment: number // 0-100
  expirationDate: string
  dollarValue: string
  weight: number // 0-100
  impact: Impact
}

interface AffectedParty {
  id: string
  priorityModifier: PriorityModifier
}

interface Transaction {
  impact: Impact
  date: string
  dollarValue: number
  variant: 'BALANCE_REFILL' | 'USER_ENGAGEMENT'
  meta?: {
    affectedParties: AffectedParty[]
  }
}

interface Follower {
  id: string
  priorityModifiers: PriorityModifier[]
  status: 'ACTIVE_PUBLIC' | 'ACTIVE_SHADOW' | 'INACTIVE' | 'BLOCKED'
}

type Gender = 'MALE' | 'FEMALE' | 'NON_BINARY' | 'UNDISCLOSED'

export interface User {
  firstName: string
  lastName: string
  birthday: string
  followers: Follower[]
  following: Follower[]
  profilePictureUrl: string
  gender: Gender
  transactions: Transaction[]
}

export const createMockUsers = (gender: Gender) =>
  Array.from({ length: 50 }).map(
    (): User => ({
      firstName: faker.name.firstName(gender === 'MALE' ? 'male' : 'female'),
      lastName: faker.name.lastName(),
      birthday: faker.date
        .between('1910-01-01T00:00:00Z', '2012-12-31T23:59:59Z')
        .toISOString(),
      followers: [],
      following: [],
      profilePictureUrl: `https://randomuser.me/api/portraits/thumb/${
        gender === 'MALE' ? 'men' : 'women'
      }/${faker.random.numeric(2, { allowLeadingZeros: false })}.jpg`,
      gender,
      transactions: []
    })
  )

const createMockendSchema = () => {
  const schema = {
    User: {
      id: {
        string: Array.from({ length: 100 }).map(faker.database.mongodbObjectId)
      },
      firstName: {
        string: Array.from({ length: 100 }).map(() =>
          faker.name.firstName(undefined)
        )
      },
      lastName: {
        string: Array.from({ length: 100 }).map(() => faker.name.lastName())
      },
      email: {
        string: Array.from({ length: 100 }).map(() => faker.internet.email())
      },
      birthday: {
        dateTime: {
          min: '1910-01-01T00:00:00Z',
          max: '2012-12-31T23:59:59Z'
        }
      },
      bio: {
        loremSentences: { minLength: 100, maxLength: 200 }
      },
      followers: {
        hasMany: 'User'
      },
      following: {
        hasMany: 'User'
      },
      photo: {
        regexp: 'https://picsum\\.photos/seed/[0-9]{5}/1920/1080'
      }
    }
  }

  return JSON.stringify(schema)
}

export default createMockendSchema
