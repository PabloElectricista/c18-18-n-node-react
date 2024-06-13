import { createSlice } from '@reduxjs/toolkit'
import { 
  getAllSpecialties,
  getSpecialtyById,
  createSpecialty,
  updateSpecialty,
  deleteSpecialty,

  getAllClinics,
  getClinicById, 
  createClinic,
  updateClinic,
  deleteClinic,

  getAllDoctors,
  getDoctorById,
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


      .addCase(createClinic.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createClinic.fulfilled, (state, action) => {
        state.loading = false
        state.clinic = action.payload 
      })
      .addCase(createClinic.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(updateClinic.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateClinic.fulfilled, (state, action) => {
        state.loading = false
        state.clinic = action.payload 
      })
      .addCase(updateClinic.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(deleteClinic.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteClinic.fulfilled, (state) => {
        state.loading = false
        state.clinic = null
      })
      .addCase(deleteClinic.rejected, (state, action) => {
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


      .addCase(createSpecialty.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createSpecialty.fulfilled, (state, action) => {
        state.loading = false
        state.specialty = action.payload
      })
      .addCase(createSpecialty.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(updateSpecialty.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateSpecialty.fulfilled, (state, action) => {
        state.loading = false
        state.specialty = action.payload
      })
      .addCase(updateSpecialty.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(deleteSpecialty.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteSpecialty.fulfilled, (state) => {
        state.loading = false
        state.specialty = null
      })
      .addCase(deleteSpecialty.rejected, (state, action) => {
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
