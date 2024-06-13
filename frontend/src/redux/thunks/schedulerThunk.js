import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllSchedulers = createAsyncThunk(
  'scheduler/getAllSchedulers',
  async(_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/scheduler')
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

export const getSchedulerById = createAsyncThunk(
  'scheduler/getSchedulerById',
  async(id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/scheduler/${id}`)
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

export const getSchedulersByDate = createAsyncThunk(
  'scheduler/getSchedulersByDate',
  async(dateData, { rejectWithValue }) => {
    try {
      const params = {
        date_type: dateData.type,
        date_from: dateData.from,
        date_to: dateData.to,
      }
      const response = await axios.get('/scheduler-date', { params })
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

export const createScheduler = createAsyncThunk(
  'scheduler/createScheduler',
  async(schedulerData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/scheduler', schedulerData)
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

export const updateScheduler = createAsyncThunk(
  'scheduler/updateScheduler',
  async(id, schedulerData, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/scheduler/${id}`, schedulerData)
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

export const deleteScheduler = createAsyncThunk(
  'scheduler/deleteScheduler',
  async(id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/scheduler/${id}`)
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
