// import { Binary } from 'bson'
// import { faker } from '@faker-js/faker'

const { faker } = require('@faker-js/faker')
const stories = require('./stories.json')
const userIds = require('./userIds.json')

const posts = userIds.map((userId, index) => ({
  text: stories[index],
  createdAt: faker.date.recent(),
  userId,
  comments: []
}))

console.log(JSON.stringify(posts))
