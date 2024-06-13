import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllAppointments = createAsyncThunk(
  'appointments/getAllAppointments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/appointments')
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

export const getAppointmentById = createAsyncThunk(
  'appointments/getAppointmentById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/appointments/${id}`)
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

export const getAppointmentByUser = createAsyncThunk(
  'appointments/getAppointmentByUser',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get('/appointments/patient', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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

export const createNewAppointment = createAsyncThunk(
  'appointments/createNewAppointment',
  async ({ token, data }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/appointments', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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

export const updateAppointment = createAsyncThunk(
  'appointments/updateAppointment',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/appointments/${id}`, data)
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

export const deleteAppointment = createAsyncThunk(
  'appointments/deleteAppointment',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/appointments/${id}`)
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
