import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default instance
