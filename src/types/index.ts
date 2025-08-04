export interface User {
  id: string
  name: string
  role: string
  avatar?: string
}

export interface Task {
  id: string
  title: string
  status: "pending" | "completed" | "in-progress"
  priority: "low" | "medium" | "high"
}

export interface TimeEntry {
  id: string
  date: string
  clockIn?: string
  clockOut?: string
  breakStart?: string
  breakEnd?: string
  status: "clocked-in" | "on-break" | "clocked-out"
}

export interface AttendanceStats {
  punctualityPerformance: number
  attendancePerformance: number
  daysPresent: number
  unauthorizedAbsent: number
}

export interface Celebration {
  id: string
  type: "birthday" | "anniversary" | "new-hire"
  user: User
  date: string
}

export interface TimeoffRequest {
  id: string
  user: User
  type: "annual" | "sick" | "pet"
  startDate: string
  endDate: string
  days: number
  status: "upcoming" | "ongoing" | "completed"
}

export interface Feed {
  id: string
  type: "profile-update" | "vacation-request" | "payslip" | "performance" | "appraisal"
  message: string
  timestamp: string
  user?: User
}

export interface Activity {
  id: string
  type: "timeoff-request" | "payroll-review" | "performance-goal"
  user: User
  message: string
  status: "pending" | "approved" | "rejected"
  timestamp: string
}

export interface Benefit {
  id: string
  name: string
  provider: string
  dependents: number
  icon: string
  color: string
  websiteUrl?: string
}

export interface TimeoffRequestForm {
  type: "vacation" | "pet" | "sick" | "annual"
  startDate: string
  endDate: string
  days: number
  reason?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  avatar?: string
  status: "online" | "offline" | "on-leave"
}

export interface WhosOut {
  id: string
  user: User
  type: "sick" | "vacation" | "personal"
  startDate: string
  endDate: string
  days: number
  status: "upcoming" | "ongoing"
}
