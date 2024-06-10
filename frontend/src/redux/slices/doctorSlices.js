import { createSlice } from '@reduxjs/toolkit'
import { getAllClinics } from '../thunks/doctorThunk'

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    loading: false,
    error: null,
    clinics: [],
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
  }
})

export default doctorSlice.reducer
