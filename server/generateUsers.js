const { faker } = require('@faker-js/faker')
const men = require('./elderly-men.json')
const women = require('./elderly-women.json')

const maleUsers = Array.from({ length: 50 }).map((_, index) => {
  const firstName = faker.name.firstName('male')
  const lastName = faker.name.lastName()
  const birthday = faker.date
    .between('1910-01-01T00:00:00Z', '1935-12-31T23:59:59Z')
    .toISOString()
  const birthYear = new Date(birthday).getFullYear()

  const slug = `${firstName}-${lastName}-${birthYear}`.toLowerCase()

  return {
    firstName,
    lastName,
    birthday,
    followers: [],
    following: [],
    profilePicture: {
      32: men.faces[index].urls[0]['32'],
      64: men.faces[index].urls[1]['64'],
      128: men.faces[index].urls[2]['128'],
      256: men.faces[index].urls[3]['256'],
      512: men.faces[index].urls[4]['512']
    },
    gender: 'MALE',
    posts: [],
    createdAt: faker.date.past(5).toISOString(),
    slug: `${slug}-${index}`
  }
})
const femaleUsers = Array.from({ length: 50 }).map((_, index) => {
  const firstName = faker.name.firstName('female')
  const lastName = faker.name.lastName()
  const birthday = faker.date
    .between('1910-01-01T00:00:00Z', '1935-12-31T23:59:59Z')
    .toISOString()
  const birthYear = new Date(birthday).getFullYear()

  const slug = `${firstName}-${lastName}-${birthYear}`.toLowerCase()

  return {
    firstName,
    lastName,
    birthday,
    followers: [],
    following: [],
    profilePicture: {
      32: women.faces[index].urls[0]['32'],
      64: women.faces[index].urls[1]['64'],
      128: women.faces[index].urls[2]['128'],
      256: women.faces[index].urls[3]['256'],
      512: women.faces[index].urls[4]['512']
    },
    gender: 'FEMALE',
    posts: [],
    createdAt: faker.date.past(5).toISOString(),
    slug: `${slug}-${index}`
  }
})

const allUsers = [...maleUsers, ...femaleUsers].sort(
  (a, b) => a.createdAt - b.createdAt
)

console.log(JSON.stringify(allUsers))
