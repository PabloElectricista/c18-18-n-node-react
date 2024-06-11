import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/login', credentials)
    if (data?.token) {
      localStorage.setItem('tkn', data.token)
    }
    return data
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const passRecovery = createAsyncThunk('auth/passRecovery', async (email, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/recover-password', { email })
    return data
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const register = createAsyncThunk('auth/register', async(userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/${userData.role === 'patient' ? 'patient' : 'doctor'}`, userData);
    if (data?.token) {
      localStorage.setItem('tkn', data.token)
    }
    return data
  } catch(err) {
    return rejectWithValue(err.message)
  }
})
