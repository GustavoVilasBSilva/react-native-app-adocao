import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userReducer',
  initialState: { email: '' },
  reducers: {
    loginAction: (state, action) => {
      state.email = action.payload
    },
    logoutAction: (state) => {
      state.email = ''
    }
  }
})
