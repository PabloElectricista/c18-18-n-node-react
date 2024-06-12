import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlices'
import appointmentsSlice from './slices/appointmentsSlices'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    appointments: appointmentsSlice
  },
})
