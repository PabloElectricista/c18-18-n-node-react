import { createSlice } from '@reduxjs/toolkit'
import { 
  getAllClinics, 
  getAllSpecialties, 
  getAllDoctors, 
  getClinicById, 
  getSpecialtyById,
  getDoctorById
} from '../thunks/doctorThunk'

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    loading: false,
    error: null,

    clinics: [],
    clinic: null,

    specialties: [],
    specialty: null,

    doctors: [],
    doctor: null
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


      .addCase(getClinicById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getClinicById.fulfilled, (state, action) => {
        state.loading = false
        state.clinic = action.payload
      })
      .addCase(getClinicById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(getAllSpecialties.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllSpecialties.fulfilled, (state, action) => {
        state.loading = false
        state.specialties = action.payload
      })
      .addCase(getAllSpecialties.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(getSpecialtyById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getSpecialtyById.fulfilled, (state, action) => {
        state.loading = false
        state.specialty = action.payload
      })
      .addCase(getSpecialtyById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(getAllDoctors.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllDoctors.fulfilled, (state, action) => {
        state.loading = false
        state.doctors = action.payload
      })
      .addCase(getAllDoctors.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(getDoctorById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getDoctorById.fulfilled, (state, action) => {
        state.loading = false
        state.doctor = action.payload
      })
      .addCase(getDoctorById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default doctorSlice.reducer
