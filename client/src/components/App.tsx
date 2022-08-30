import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from 'layouts/Home'
import Users from 'layouts/Users'
import SingleUser from 'layouts/SingleUser'
import type { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { usePosts } from 'queries/usePosts'
import { useUsers } from 'queries/useUsers'

function App() {
  const loggedInSlug = useSelector(
    (state: RootState) => state.appState.loggedInAs
  )

  usePosts()
  useUsers()

  return (
    <BrowserRouter>
      <Layout key={loggedInSlug}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<SingleUser />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
