import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { TimeEntry } from "../types"

interface TimeTrackingState {
  currentEntry: TimeEntry | null
  breakTimer: number
  isOnBreak: boolean
}

const initialState: TimeTrackingState = {
  currentEntry: {
    id: "1",
    date: "Wed 17 Jul, 2023",
    clockIn: "08:00 AM",
    status: "clocked-in",
  },
  breakTimer: 0,
  isOnBreak: false,
}

const timeTrackingSlice = createSlice({
  name: "timeTracking",
  initialState,
  reducers: {
    clockIn: (state) => {
      const now = new Date()
      state.currentEntry = {
        id: Date.now().toString(),
        date: now.toDateString(),
        clockIn: now.toLocaleTimeString(),
        status: "clocked-in",
      }
    },
    clockOut: (state) => {
      if (state.currentEntry) {
        state.currentEntry.clockOut = new Date().toLocaleTimeString()
        state.currentEntry.status = "clocked-out"
      }
    },
    startBreak: (state) => {
      if (state.currentEntry) {
        state.currentEntry.breakStart = new Date().toLocaleTimeString()
        state.currentEntry.status = "on-break"
        state.isOnBreak = true
        state.breakTimer = 0
      }
    },
    endBreak: (state) => {
      if (state.currentEntry) {
        state.currentEntry.breakEnd = new Date().toLocaleTimeString()
        state.currentEntry.status = "clocked-in"
        state.isOnBreak = false
        state.breakTimer = 0
      }
    },
    updateBreakTimer: (state, action: PayloadAction<number>) => {
      state.breakTimer = action.payload
    },
  },
})

export const { clockIn, clockOut, startBreak, endBreak, updateBreakTimer } = timeTrackingSlice.actions
export default timeTrackingSlice.reducer
