const { Configuration, OpenAIApi } = require('openai')
const { faker } = require('@faker-js/faker')
// const { OPENAI_API_KEY } = require('./env')

const configuration = new Configuration({})
const openai = new OpenAIApi(configuration)

const getOpenAiStories = () => {
  Array.from({ length: 100 }).forEach(() => {
    openai
      .createCompletion({
        model: 'text-davinci-002',
        prompt: `'Topic: ${faker.word.noun()}\n2-sentence geriatric complaint about social media:'`,
        temperature: 0.8,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
      })
      .then((res) => {
        console.log(`"${res.data.choices[0].text.trim()}",`)
      })
  })
}

getOpenAiStories()
