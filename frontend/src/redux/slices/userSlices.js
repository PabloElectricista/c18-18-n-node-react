import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload
    },
    signup: (state, { payload }) => {
      state.user = payload
    },
    getScheludes: (state, { payload }) => {
      state.user = {
        ...state.user,
        payload
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, signup, getScheludes } = userSlice.actions

export default userSlice.reducer