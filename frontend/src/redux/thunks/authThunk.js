import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('/login', credentials)
    if (response.data && response.data.tkn) {
      localStorage.setItem('tkn', response.data.tkn)
    }
    return response.data
  } catch (err) {
    return rejectWithValue(err.message)
  }
})
