import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/login', credentials)
    if (data?.id) {
      localStorage.setItem('tkn', data.id)
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
    const user = await axios.post('/register', userData)
    if (user?.id) {
      localStorage.setItem('tkn', user.id)
    }
    return user
  } catch(err) {
    return rejectWithValue(err.message)
  }
})
