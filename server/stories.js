const { Configuration, OpenAIApi } = require('openai')
const { faker } = require('@faker-js/faker')
// const { OPENAI_API_KEY } = require('./env')

const configuration = new Configuration({})
const openai = new OpenAIApi(configuration)

const getOpenAiStories = () => {
  Array.from({ length: 8 }).forEach(() => {
    openai
      .createCompletion({
        model: 'text-davinci-002',
        prompt: `'Topic: Metaverse\n2-sentences about it not being totally creepy:'`,
        // prompt: `'Topic: ${faker.word.noun()}\n2-sentences of a robot trying to convince a person that it is human:'`,
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
