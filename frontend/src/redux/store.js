import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlices'
import doctorSlice from './slices/doctorSlices'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    doctor: doctorSlice,
  },
})
