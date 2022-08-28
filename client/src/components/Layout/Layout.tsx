import { FC, PropsWithChildren } from 'react'
import logo from '../../assets/plitpiut-logo.png'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <body className="flex min-h-screen flex-col bg-white">
      <header className="flex h-20 items-center border border-b p-4 shadow-sm">
        <img src={logo} className="h-16" />
      </header>
      <main className="grow bg-slate-50">{children}</main>
    </body>
  )
}

export default Layout
