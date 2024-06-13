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
      const response = await axios.get(`/clinic/${id}`)
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

export const createClinic = createAsyncThunk(
  'doctor/createClinic', 
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/clinic', data)
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

export const updateClinic = createAsyncThunk(
  'doctor/updateClinic', 
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/clinic/${id}`, data)
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

export const deleteClinic = createAsyncThunk(
  'doctor/deleteClinic', 
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/clinic/${id}`)
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
      const response = await axios.get(`/specialty/${id}`)
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

export const createSpecialty = createAsyncThunk(
  'doctor/createSpecialty',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/specialty', data)
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

export const updateSpecialty = createAsyncThunk(
  'doctor/updateSpecialty', 
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/specialty/${id}`, data)
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

export const deleteSpecialty = createAsyncThunk(
  'doctor/deleteSpecialty', 
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/specialty/${id}`)
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
      const response = await axios.get(`/doctor/${id}`)
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
