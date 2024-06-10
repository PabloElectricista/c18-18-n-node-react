import { createSlice } from '@reduxjs/toolkit'
import { getAllClinics, getAllSpecialties, getAllDoctors } from '../thunks/doctorThunk'

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    loading: false,
    error: null,
    clinics: [],
    specialties: [],
    doctors: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllClinics.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllClinics.fulfilled, (state, action) => {
        state.loading = false
        state.clinics = action.payload
      })
      .addCase(getAllClinics.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getAllSpecialties.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllSpecialties.fulfilled, (state, action) => {
        state.loading = false
        state.clinics = action.payload
      })
      .addCase(getAllSpecialties.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getAllDoctors.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllDoctors.fulfilled, (state, action) => {
        state.loading = false
        state.clinics = action.payload
      })
      .addCase(getAllDoctors.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default doctorSlice.reducer
