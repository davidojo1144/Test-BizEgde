import { configureStore } from "@reduxjs/toolkit"
import dashboardReducer from "./dashboardSlice"
import timeTrackingReducer from "./timeTrackingSlice"

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    timeTracking: timeTrackingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
