import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  loggedInAs: string
}

const initialState: AppState = {
  loggedInAs: 'zuck'
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedInAs: (state, action: PayloadAction<string>) => {
      state.loggedInAs = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLoggedInAs } = appSlice.actions

export default appSlice.reducer
