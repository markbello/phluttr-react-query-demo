const { faker } = require('@faker-js/faker')
const { shuffle } = require('lodash')

const elderlyUsers = require('./elderly-users.json')

const complaints = require('./complaints.json')
const complaints2 = require('./complaints-3.json')
const complaints3 = require('./complaints-3.json')
const femaleComplaints = require('./female-complaints.json')
const socialMediaComplaints = require('./social-media-complaints.json')
const technologyComplaints = require('./technology-complaints.json')
const maleComplaints = require('./male-complaints.json')
const horrorStories = require('./horror-stories.json')
const oldTimeyStories = require('./oldTimeyStories.json')

const posts = []

elderlyUsers.forEach((user, index) => {
  const collections = [
    complaints,
    complaints2,
    complaints3,
    socialMediaComplaints,
    technologyComplaints,
    horrorStories,
    oldTimeyStories
  ]

  const collectionsForUser =
    user.gender === 'MALE'
      ? [...collections, maleComplaints]
      : [...collections, femaleComplaints]

  const randomlyOrderedCollections = shuffle(collectionsForUser)

  randomlyOrderedCollections.forEach((collection) => {
    const post = {
      text: collection[index],
      createdAt: faker.date.recent(),
      createdBy: user.slug,
      comments: [],
      likes: []
    }

    posts.push(post)
  })
})

console.log(JSON.stringify(posts))
