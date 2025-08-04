"use client"

import { TimeTracker } from "./TimeTracker"
import { TasksList } from "./TasksList"
import { AttendanceStats } from "./AttendanceStats"
import { TimeoffSection } from "./TimeoffSection"
import { Activity } from "./Activity"
import { Benefits } from "./Benefits"
import { Celebrations } from "./Celebrations"
import { TimeoffRecord } from "./TimeoffRecord"
import { MyTeams } from "./MyTeams"
import { Feeds } from "./Feeds"
import { WhosOut } from "./WhosOut"
import { useAppSelector } from "../hooks/useAppSelector"

export function DashboardLayout() {
  const { showFeeds } = useAppSelector((state) => state.dashboard)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TimeTracker />
          <div className="space-y-6">
            <TasksList />
            {showFeeds && <Activity />}
          </div>
        </div>

        <AttendanceStats />
        <TimeoffSection />
        <Benefits />
      </div>

      <div className="space-y-6">
        {showFeeds && <Feeds />}
        <Celebrations />
        <TimeoffRecord />
        <WhosOut />
        <MyTeams />
      </div>
    </div>
  )
}
