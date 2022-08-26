import { faker } from '@faker-js/faker'

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
