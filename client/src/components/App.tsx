import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from 'layouts/Home'
import Users from 'layouts/Users'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
