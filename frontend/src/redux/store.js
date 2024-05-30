import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlices'

export const store = configureStore({
  reducer: {
    auth: authSlice
  },
})
