import { faker } from '@faker-js/faker'
import { Gender, User } from 'models'

export const createMockUsers = (gender: Gender) =>
  Array.from({ length: 50 }).map(
    (): User => ({
      firstName: faker.name.firstName(gender === 'MALE' ? 'male' : 'female'),
      lastName: faker.random.word(),
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
