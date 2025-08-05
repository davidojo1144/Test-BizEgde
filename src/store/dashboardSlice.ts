import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type {
  Task,
  Celebration,
  TimeoffRequest,
  Feed,
  AttendanceStats,
  Activity,
  Benefit,
  TeamMember,
  WhosOut,
} from "../types"

interface DashboardState {
  user: {
    id: string
    name: string
    role: string
  } | null
  tasks: Task[]
  celebrations: Celebration[]
  timeoffRequests: TimeoffRequest[]
  feeds: Feed[]
  attendanceStats: AttendanceStats
  activities: Activity[]
  benefits: Benefit[]
  teamMembers: TeamMember[]
  whosOut: WhosOut[]
  showFeeds: boolean
  compactView: boolean
  currentView: "dashboard" | "timeoff-requests" | "benefits"
}

const initialState: DashboardState = {
  user: {
    id: "1",
    name: "Williams Oluwadamilare",
    role: "Employee",
  },
  tasks: [
    { id: "1", title: "Create the New Onboar...", status: "completed", priority: "high" },
    { id: "2", title: "Add New Employee", status: "completed", priority: "medium" },
    { id: "3", title: "Create New Designs", status: "pending", priority: "medium" },
  ],
  celebrations: [
    {
      id: "1",
      type: "birthday",
      user: { id: "2", name: "John Micheal", role: "Leader Designer" },
      date: "Jan 23",
    },
    {
      id: "2",
      type: "birthday",
      user: { id: "3", name: "John Micheal", role: "Leader Designer" },
      date: "Jan 23",
    },
  ],
  timeoffRequests: [
    {
      id: "1",
      user: { id: "2", name: "John Micheal", role: "Leader Designer" },
      type: "annual",
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      days: 2,
      status: "upcoming",
    },
    {
      id: "2",
      user: { id: "3", name: "John Micheal", role: "Leader Designer" },
      type: "annual",
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      days: 2,
      status: "ongoing",
    },
  ],
  feeds: [
    {
      id: "1",
      type: "profile-update",
      message: "Your profile update has been approved",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      type: "vacation-request",
      message: "3 days vacation Request has been approved",
      timestamp: "1 day ago",
    },
    {
      id: "3",
      type: "payslip",
      message: "Your February Payslip is now available",
      timestamp: "2 days ago",
    },
    {
      id: "4",
      type: "performance",
      message: "Your Performance Appraisal report is ready",
      timestamp: "3 days ago",
    },
  ],
  attendanceStats: {
    punctualityPerformance: 91,
    attendancePerformance: 91,
    daysPresent: 80,
    unauthorizedAbsent: 10,
  },
  activities: [
    {
      id: "1",
      type: "timeoff-request",
      user: { id: "2", name: "Sam Johnson", role: "Employee" },
      message: "Requested for 5 Sick days off",
      status: "pending",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      type: "timeoff-request",
      user: { id: "3", name: "Micheal", role: "Employee" },
      message: "Request for 40 Days Annual Leave",
      status: "pending",
      timestamp: "1 day ago",
    },
    {
      id: "3",
      type: "payroll-review",
      user: { id: "1", name: "Williams Oluwadamilare", role: "Employee" },
      message: "Review Mar. 3 2022 - April 27, 2022 Payroll",
      status: "pending",
      timestamp: "3 days ago",
    },
    {
      id: "4",
      type: "performance-goal",
      user: { id: "1", name: "Williams Oluwadamilare", role: "Employee" },
      message: "Set up Performance Goals for March",
      status: "pending",
      timestamp: "1 week ago",
    },
  ],
  benefits: [
    {
      id: "1",
      name: "Family Healthcare Plan",
      provider: "Leadway & Associates",
      dependents: 3,
      icon: "🏥",
      color: "blue",
      websiteUrl: "https://leadway.com",
    },
    {
      id: "2",
      name: "Leadway Pension",
      provider: "Leadway & Associates",
      dependents: 1,
      icon: "💰",
      color: "red",
      websiteUrl: "https://leadway.com",
    },
  ],
  teamMembers: [
    { id: "2", name: "John Micheal", role: "Founder", status: "online" },
    { id: "3", name: "John Micheal", role: "Founder", status: "online" },
    { id: "4", name: "John Micheal", role: "Founder", status: "offline" },
    { id: "5", name: "John Micheal", role: "Founder", status: "online" },
    { id: "6", name: "John Micheal", role: "Founder", status: "online" },
  ],
  whosOut: [
    {
      id: "1",
      user: { id: "2", name: "John Micheal", role: "Leader Designer" },
      type: "sick",
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      days: 2,
      status: "ongoing",
    },
    {
      id: "2",
      user: { id: "3", name: "John Micheal", role: "Leader Designer" },
      type: "sick",
      startDate: "Jan 23",
      endDate: "Jan 25, 2022",
      days: 2,
      status: "upcoming",
    },
  ],
  showFeeds: false,
  compactView: false,
  currentView: "dashboard",
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleFeeds: (state) => {
      state.showFeeds = !state.showFeeds
    },
    toggleCompactView: (state) => {
      state.compactView = !state.compactView
    },
    updateTaskStatus: (state, action: PayloadAction<{ id: string; status: Task["status"] }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id)
      if (task) {
        task.status = action.payload.status
      }
    },
    setCurrentView: (state, action: PayloadAction<DashboardState["currentView"]>) => {
      state.currentView = action.payload
    },
    updateActivityStatus: (state, action: PayloadAction<{ id: string; status: Activity["status"] }>) => {
      const activity = state.activities.find((a) => a.id === action.payload.id)
      if (activity) {
        activity.status = action.payload.status
      }
    },
  },
})

export const { toggleFeeds, toggleCompactView, updateTaskStatus, setCurrentView, updateActivityStatus } =
  dashboardSlice.actions
export default dashboardSlice.reducer
