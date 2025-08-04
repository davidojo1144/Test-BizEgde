"use client"

import { TimeTracker } from "./TimeTracker"
import { Activity } from "./Activity"
import { TimeoffManagement } from "./TimeoffManagement"
import { Celebrations } from "./Celebrations"
import { WhosOut } from "./WhosOut"
import { MyTeams } from "./MyTeams"
import { Benefits } from "./Benefits"

export function TimeoffLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TimeTracker />
          <Activity />
        </div>

        <TimeoffManagement />
        <Benefits />
      </div>

      <div className="space-y-6">
        <Celebrations />
        <WhosOut />
        <MyTeams />
      </div>
    </div>
  )
}
