import { FC, PropsWithChildren } from 'react'
import zuck from './zuck-square-2.png'
import logo from '../../assets/plitpiut-logo.png'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex h-20 items-center justify-between border border-b p-4 shadow-sm">
        <img src={logo} className="h-16" />
        <img src={zuck} className="h-12 rounded-full" />
      </header>
      <main className="flex min-h-full grow bg-slate-50">{children}</main>
    </div>
  )
}

export default Layout
