import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllClinics = createAsyncThunk(
  'doctor/getAllClinics', 
  async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/clinic')
    if (response.data.message === 'success') {
      return response.data.data
    } else {
      return rejectWithValue(response.data.errors)
    }
  } catch (err) {
    return rejectWithValue(err.message)
  }
})
