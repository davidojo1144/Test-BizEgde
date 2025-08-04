"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAppSelector } from "../hooks/useAppSelector"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { updateActivityStatus } from "../store/dashboardSlice"

export function Activity() {
  const { activities } = useAppSelector((state) => state.dashboard)
  const dispatch = useAppDispatch()

  const handleAcceptRequest = (activityId: string) => {
    dispatch(updateActivityStatus({ id: activityId, status: "approved" }))
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          Activity
          <Badge variant="destructive" className="rounded-full w-5 h-5 p-0 flex items-center justify-center text-xs">
            {activities.filter((a) => a.status === "pending").length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <p className="text-sm font-medium">{activity.user.name}</p>
              <p className="text-sm text-gray-600">{activity.message}</p>
            </div>
            <div className="flex gap-2">
              {activity.status === "pending" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-200 bg-transparent"
                  onClick={() => handleAcceptRequest(activity.id)}
                >
                  Accept Request
                </Button>
              )}
              <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                View
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
