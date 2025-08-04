"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Target } from "lucide-react"
import { useAppSelector } from "../hooks/useAppSelector"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { clockIn, clockOut, startBreak, endBreak, updateBreakTimer } from "../store/timeTrackingSlice"

export function TimeTracker() {
  const { currentEntry, breakTimer, isOnBreak } = useAppSelector((state) => state.timeTracking)
  const dispatch = useAppDispatch()

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isOnBreak) {
      interval = setInterval(() => {
        dispatch(updateBreakTimer(breakTimer + 1))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isOnBreak, breakTimer, dispatch])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const formatBreakTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const remainingSecs = seconds % 60
    return `${mins}:${remainingSecs.toString().padStart(2, "0")}`
  }

  if (isOnBreak) {
    return (
      <Card className="bg-orange-100 border-orange-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">Break Time</span>
          </div>
          <div className="text-sm text-gray-600 mb-4">Wed 17 Jul, 2023</div>

          <div className="text-4xl font-bold text-center mb-6">{formatBreakTime(breakTimer)}</div>

          <div className="space-y-3">
            <Button className="w-full bg-orange-500 hover:bg-orange-600" onClick={() => dispatch(endBreak())}>
              End Break
            </Button>
            <Button variant="outline" className="w-full bg-transparent" onClick={() => dispatch(clockOut())}>
              Clock out
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-blue-500 text-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">Attendance</span>
          <Target className="h-4 w-4" />
        </div>
        <div className="text-sm mb-4">{currentEntry?.date}</div>

        <div className="flex gap-2 mb-4">
          <Badge variant="secondary" className="bg-white/20 text-white">
            <MapPin className="h-3 w-3 mr-1" />
            Remote
          </Badge>
          <Badge variant="secondary" className="bg-white/90 text-blue-600">
            On-Site
          </Badge>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">Status</span>
          <Badge className="bg-white/20 text-white">Punctual</Badge>
        </div>

        <div className="text-4xl font-bold text-center mb-2">0 8 : 3 0</div>

        <div className="text-xs text-center mb-6">
          Last Clock-in Time & Date:
          <br />
          08:00 AM (18 Nov, 2024)
        </div>

        <div className="space-y-3">
          {currentEntry?.status === "clocked-in" ? (
            <>
              <Button
                variant="outline"
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-blue-500"
                onClick={() => dispatch(startBreak())}
              >
                Start Break
              </Button>
              <Button className="w-full bg-white text-blue-500 hover:bg-gray-100" onClick={() => dispatch(clockOut())}>
                Clock out
              </Button>
            </>
          ) : (
            <Button className="w-full bg-white text-blue-500 hover:bg-gray-100" onClick={() => dispatch(clockIn())}>
              Clock In
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
