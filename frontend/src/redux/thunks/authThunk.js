import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/login', credentials)
    if (data?.token) {
      localStorage.setItem('tkn', data.token)
    }
    if (data.message === 'success') {
      return data.data
    } 
  } catch(err) {
    return rejectWithValue(err.message)
  }
})

export const passRecovery = createAsyncThunk('auth/passRecovery', async (email, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/recovery-password', { email })

    if (data.message === 'success') {
      return data.data
    } 
  } catch(err) {
    return rejectWithValue(err.message)
  }
})

export const register = createAsyncThunk('auth/register', async(userData, { rejectWithValue }) => {
  try {
    const { role, ...payload } = userData
    const { data } = await axios.post(`/${role}`, payload);
    if (data?.token) {
      localStorage.setItem('tkn', data.token)
    }

    if (data.message === 'success') {
      return data.data
    } 
  } catch(err) {
    return rejectWithValue(err.message)
  }
})
