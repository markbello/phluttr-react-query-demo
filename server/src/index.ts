import express from "express"

const PORT = 5001

const app = express()
app.use(express.json())

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
  res.send(user)
})

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`))
