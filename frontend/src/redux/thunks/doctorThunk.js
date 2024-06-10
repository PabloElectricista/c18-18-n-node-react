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
  }
)

export const getClinicById = createAsyncThunk(
  'doctor/getClinicById', 
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get('/clinic/' + id)
      if (response.data.message === 'success') {
        return response.data.data
      } else {
        return rejectWithValue(response.data.errors)
      }
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const getAllSpecialties = createAsyncThunk(
  'doctor/getAllSpecialties',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/specialty')
      if (response.data.message === 'success') {
        return response.data.data
      } else {
        return rejectWithValue(response.data.errors)
      }
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const getSpecialtyById = createAsyncThunk(
  'doctor/getSpecialtyById', 
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get('/specialty/' + id)
      if (response.data.message === 'success') {
        return response.data.data
      } else {
        return rejectWithValue(response.data.errors)
      }
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const getAllDoctors = createAsyncThunk(
  'doctor/getAllDoctors',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/doctor')
      if (response.data.message === 'success') {
        return response.data.data
      } else {
        return rejectWithValue(response.data.errors)
      }
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const getDoctorById = createAsyncThunk(
  'doctor/getDoctorById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get('/doctor/' + id)
      if (response.data.message === 'success') {
        return response.data.data
      } else {
        return rejectWithValue(response.data.errors)
      }
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)
