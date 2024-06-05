import { createSlice } from '@reduxjs/toolkit'
import { login, passRecovery } from '../thunks/authThunk'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    user: null,
    error: null,
    passReset: null,
  },
  reducers: {
    signup: (state, { payload }) => {
      state.user = payload
    },
    update: (state, { payload }) => {
      state.user = payload
    },
    getScheludes: (state, { payload }) => {
      state.user = {
        ...state.user,
        payload
      }
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('tkn')
    }
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
      .addCase(passRecovery.pending, (state) => {
        state.loading = true
        state.error = null
        state.passReset = false
      })
      .addCase(passRecovery.fulfilled, (state) => {
        state.loading = false
        state.passReset = true
      })
      .addCase(passRecovery.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { signup, update, getScheludes } = authSlice.actions

export default authSlice.reducer