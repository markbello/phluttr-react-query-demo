import express from "express"
import cors from 'cors'
import { userRouter } from "./routes"
import dotenv from 'dotenv'

const PORT = 5001

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())

app.get('/api/v1', (req, res) => {
  res.send('Hello World')
})

app.use('/api/v1/users', userRouter)

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`))
