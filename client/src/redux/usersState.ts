// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { getUsers } from 'services/usersService'
// import { User } from '../../../shared/src/models'

// const fetchUserById = createAsyncThunk<
//   User,
//   string,
//   {
//     state: { users: { loading: string; currentRequestId: string } }
//   }
// >('users/fetchAll', async (userId: string, { getState, requestId }) => {
//   const { currentRequestId, loading } = getState().users
//   if (loading !== 'pending' || requestId !== currentRequestId) {
//     return
//   }
//   const response = await getUsers()
//   return response
// })

// const usersSlice = createSlice({
//   name: 'users',
//   initialState: {
//     entities: [],
//     loading: 'idle',
//     currentRequestId: undefined,
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserById.pending, (state, action) => {
//         if (state.loading === 'idle') {
//           state.loading = 'pending'
//           state.currentRequestId = action.meta.requestId
//         }
//       })
//       .addCase(fetchUserById.fulfilled, (state, action) => {
//         const { requestId } = action.meta
//         if (
//           state.loading === 'pending' &&
//           state.currentRequestId === requestId
//         ) {
//           state.loading = 'idle'
//           state.entities.push(action.payload)
//           state.currentRequestId = undefined
//         }
//       })
//       .addCase(fetchUserById.rejected, (state, action) => {
//         const { requestId } = action.meta
//         if (
//           state.loading === 'pending' &&
//           state.currentRequestId === requestId
//         ) {
//           state.loading = 'idle'
//           state.error = action.error
//           state.currentRequestId = undefined
//         }
//       })
//   }
// })
