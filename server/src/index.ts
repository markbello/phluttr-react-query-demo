import express from "express"
import cors from 'cors'
import { userRouter } from "./routes"

const PORT = 5001

const app = express()

app.use(express.json())
app.use(cors())

const user =   {
  "firstName": "Gloria",
  "lastName": "Douglas",
  "birthday": "2011-02-02T00:36:56.564Z",
  "followers": [],
  "following": [],
  "profilePictureUrl": "https://randomuser.me/api/portraits/thumb/women/30.jpg",
  "gender": "FEMALE",
  "transactions": []
};

app.get('/api/v1', (req, res) => {
  res.send('Hello World')
})

app.use('/api/v1/users', userRouter)

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`))
