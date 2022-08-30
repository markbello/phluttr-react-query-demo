import { LegacyRef, useRef, useState } from 'react'
import useOnClickOutside from './useOnClickOutside'
import UserItem from './UserItem'
import zuck from './zuck-square-2.png'
import type { RootState } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setLoggedInAs } from '../../../redux/appState'
import { User } from '../../../../../shared/src/models'
import LoadingWrapper from 'components/LoadingWrapper'
import { useUserBySlug } from 'queries/useUserBySlug'

const AvatarMenu = () => {
  const loggedInSlug = useSelector(
    (state: RootState) => state.appState.loggedInAs
  )
  const dispatch = useDispatch()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const ref = useRef<HTMLDivElement>() as LegacyRef<HTMLDivElement>
  useOnClickOutside(ref, () => setIsMenuOpen(false))

  const { data: loggedInUser = {} as User, status: userStatus } =
    useUserBySlug(loggedInSlug)

  const handleUserClick = (selectedUserSlug: string) => {
    dispatch(setLoggedInAs(selectedUserSlug))
    setIsMenuOpen(false)
  }

  return (
    <div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer"
      >
        <img
          src={
            loggedInSlug === 'zuck'
              ? zuck
              : (loggedInUser?.profilePicture || {})[64]
          }
          className="h-12 rounded-full"
        />
      </button>
      {isMenuOpen && (
        <div
          className="absolute top-16 right-8 w-72 rounded-xl border bg-white shadow-md"
          ref={ref}
        >
          <LoadingWrapper loadStatuses={[userStatus]}>
            <h3 className="mb-2 w-full border-b p-2 text-center text-lg">
              Change User
            </h3>
            <UserItem
              picture={zuck}
              name="Zuck"
              slug="zuck"
              onClick={() => handleUserClick('zuck')}
            />
            <UserItem
              picture="https://images.generated.photos/rl3LtKh5gBxEVXpW2haz6OZgJt09DcUB5yxtbxmcuas/rs:fit:64:64/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg0NzA4LmpwZw.jpg"
              name="Mae Kozey"
              slug="mae-kozey-1927-28"
              onClick={() => handleUserClick('mae-kozey-1927-28')}
            />
            <UserItem
              picture="https://images.generated.photos/_ffEVrHgJoI11iyQoJVhWLJm57bHligFOuStUbhMHz8/rs:fit:64:64/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxMzc2LmpwZw.jpg"
              name="Howard Sawayn"
              slug="howard-sawayn-1922-14"
              onClick={() => handleUserClick('howard-sawayn-1922-14')}
            />
          </LoadingWrapper>
        </div>
      )}
    </div>
  )
}

export default AvatarMenu
