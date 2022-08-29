import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'

const UserItem = ({
  picture,
  name,
  slug,
  onClick
}: {
  picture: string
  name: string
  slug: string
  onClick: (slug: string) => void
}) => {
  const loggedInSlug = useSelector(
    (state: RootState) => state.appState.loggedInAs
  )

  return (
    <button
      className="flex w-full cursor-pointer items-center rounded-xl p-4 hover:bg-blue-50"
      onClick={() => onClick(slug)}
    >
      <img src={picture} className="h-12 w-12 rounded-full" />
      <div
        className={`ml-4 ${
          loggedInSlug === slug ? 'font-semibold' : 'font-normal'
        }`}
      >
        {name}
      </div>
    </button>
  )
}

export default UserItem
