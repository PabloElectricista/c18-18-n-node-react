import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlices'
import doctorSlice from './slices/doctorSlices'
import schedulerSlice from './slices/schedulerSlices'
import appointmentsSlice from './slices/appointmentsSlices'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    doctor: doctorSlice,
    scheduler: schedulerSlice,
    appointments: appointmentsSlice
  },
})
