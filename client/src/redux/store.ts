import { configureStore } from '@reduxjs/toolkit'
import appStateReducer from './appState'

export const store = configureStore({
  reducer: {
    appState: appStateReducer
  },
  devTools: true
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
