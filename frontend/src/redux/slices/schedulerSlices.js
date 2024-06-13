import { createSlice } from '@reduxjs/toolkit'
import { 
  getSchedulerById, 
  getAllSchedulers, 
  getSchedulersByDate, 
  createScheduler,
  updateScheduler,
  deleteScheduler
} from '../thunks/schedulerThunk'

export const schedulerSlice = createSlice({
  name: 'scheduler',
  initialState: {
    error: null,
    loading: false,
    schedulers: [],
    scheduler: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSchedulerById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getSchedulerById.fulfilled, (state, action) => {
        state.loading = false
        state.scheduler = action.payload
      })
      .addCase(getSchedulerById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(getAllSchedulers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllSchedulers.fulfilled, (state, action) => {
        state.loading = false
        state.schedulers = action.payload
      })
      .addCase(getAllSchedulers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(getSchedulersByDate.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getSchedulersByDate.fulfilled, (state, action) => {
        state.loading = false
        state.schedulers = action.payload
      })
      .addCase(getSchedulersByDate.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(createScheduler.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createScheduler.fulfilled, (state, action) => {
        state.loading = false
        state.scheduler = action.payload
      })
      .addCase(createScheduler.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(updateScheduler.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateScheduler.fulfilled, (state, action) => {
        state.loading = false
        state.scheduler = action.payload
      })
      .addCase(updateScheduler.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(deleteScheduler.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteScheduler.fulfilled, (state) => {
        state.loading = false
        state.scheduler = null
      })
      .addCase(deleteScheduler.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default schedulerSlice.reducer
