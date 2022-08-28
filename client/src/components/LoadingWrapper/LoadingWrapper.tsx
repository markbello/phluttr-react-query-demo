import { QueryStatus } from '@tanstack/react-query'
import Spinner from 'components/Spinner'
import { FC, PropsWithChildren } from 'react'

const LoadingWrapper: FC<
  PropsWithChildren<{ loadStatuses: QueryStatus[] }>
> = ({ loadStatuses, children }) => {
  if (loadStatuses.some((status) => status === 'loading')) {
    return (
      <div className="flex w-full grow flex-col items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (loadStatuses.some((status) => status === 'error')) {
    return (
      <div className="flex h-full w-full grow flex-col items-center justify-center">
        <h1 className="text-xl font-bold">Oops! Something went wrong.</h1>
      </div>
    )
  }

  return <>{children}</>
}

export default LoadingWrapper
