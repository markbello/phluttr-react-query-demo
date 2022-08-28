import { useEffect, useState } from 'react'
import { axios } from 'services'
import Layout from './Layout'
import User from './User'
import { User as UserType } from '../../../shared/src/index'

function App() {
  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get<UserType[]>('/users')
      setUsers(response.data)
    }
    getUsers()
  }, [])

  return (
    <Layout>
      <div className="grid grid-cols-3">
        {users.map((user) => (
          <User
            user={user}
            key={user.firstName + user.lastName + user.birthday}
          />
        ))}
      </div>
    </Layout>
  )
}

export default App
