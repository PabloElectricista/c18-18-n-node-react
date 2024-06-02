import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/login', credentials)
    if (data && data.id) {
      localStorage.setItem('tkn', data.id)
    }
    return data
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const passRecovery = createAsyncThunk('auth/passRecovery', async (email, { rejectWithValue}) => {
  try {
    const { data } = await axios.post('/recover-password', { email })
    return data
  } catch (err) {
    return rejectWithValue(err.message)
  }
})
