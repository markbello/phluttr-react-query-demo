const { Configuration, OpenAIApi } = require('openai')
const { faker } = require('@faker-js/faker')
const { OPENAI_API_KEY } = require('./env')

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

const getOpenAiStories = () => {
  Array.from({ length: 50 }).forEach(() => {
    openai
      .createCompletion({
        model: 'text-davinci-002',
        prompt: `'Topic: ${faker.word.noun()}\nTwo-Sentence Horror Story:'`,
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
