import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

export const useLoggedInUserSlug = () =>
  useSelector((state: RootState) => state.appState.loggedInAs)
