import { createSlice } from '@reduxjs/toolkit'
import { 
  createNewAppointment,
  deleteAppointment,
  getAllAppointments, 
  getAppointmentById, 
  getAppointmentByUser, 
  updateAppointment
} from '../thunks/appointmentsThunk'

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    loading: false,
    error: null,
    appointments: [],
    appointment: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAppointments.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllAppointments.fulfilled, (state, action) => {
        state.loading = false
        state.appointments = action.payload
      })
      .addCase(getAllAppointments.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(getAppointmentById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAppointmentById.fulfilled, (state, action) => {
        state.loading = false
        state.appointment = action.payload
      })
      .addCase(getAppointmentById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(getAppointmentByUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAppointmentByUser.fulfilled, (state, action) => {
        state.loading = false
        state.appointments = action.payload
      })
      .addCase(getAppointmentByUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(createNewAppointment.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createNewAppointment.fulfilled, (state, action) => {
        state.loading = false
        state.appointment = action.payload
      })
      .addCase(createNewAppointment.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(updateAppointment.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        state.loading = false
        state.appointment = action.payload
      })
      .addCase(updateAppointment.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(deleteAppointment.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteAppointment.fulfilled, (state) => {
        state.loading = false
        state.appointment = null
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default appointmentsSlice.reducer
