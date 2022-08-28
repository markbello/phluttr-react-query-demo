import { createMockUsers } from 'utils/createMockendSchema'
import Layout from './Layout'
import User from './User'

function random_sort(a, b) {
  return Math.random() - 0.5
}

function App() {
  const users = [...createMockUsers('FEMALE'), ...createMockUsers('MALE')].sort(
    random_sort
  )

  console.log(JSON.stringify(users))

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
