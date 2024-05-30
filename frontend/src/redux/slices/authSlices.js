import { createSlice } from '@reduxjs/toolkit'
import { login } from '../thunks/authThunk'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { signup, getScheludes } = authSlice.actions

export default authSlice.reducer