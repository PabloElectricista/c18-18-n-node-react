import { createSlice } from '@reduxjs/toolkit'

export const pabloSlices = createSlice({
  name: 'pablo',
  initialState: {
    appointment: {}
  },
  reducers: {
    placeAppointment(state, { payload }) {
      state.appointment = payload
    }
  }
})

export const { placeAppointment } = pabloSlices.actions

export default pabloSlices.reducer