import { useLoggedInUserSlug } from 'hooks/useLoggedInUserSlug'
import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/plitpiut-logo.png'
import AvatarMenu from './AvatarMenu'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const loggedInUserSlug = useLoggedInUserSlug()
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 flex h-20 items-center justify-between border border-b bg-white p-4 shadow-sm">
        <Link to="/" className="hover:cursor-pointer">
          <img src={logo} className="h-16" />
        </Link>
        <div className="flex items-center">
          <Link
            className="mr-4 block cursor-pointer"
            to={`/users/${loggedInUserSlug}`}
          >
            View Profile
          </Link>
          <AvatarMenu />
        </div>
      </header>
      <main className="flex min-h-full grow bg-slate-50">{children}</main>
    </div>
  )
}

export default Layout
