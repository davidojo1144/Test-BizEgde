"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle } from "lucide-react"
import { useAppSelector } from "../hooks/useAppSelector"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { updateTaskStatus } from "../store/dashboardSlice"

export function TasksList() {
  const { tasks } = useAppSelector((state) => state.dashboard)
  const dispatch = useAppDispatch()

  const handleTaskToggle = (taskId: string, currentStatus: string) => {
    const newStatus = currentStatus === "completed" ? "pending" : "completed"
    dispatch(updateTaskStatus({ id: taskId, status: newStatus as any }))
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            Tasks
            <Badge variant="destructive" className="rounded-full w-5 h-5 p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </CardTitle>
          <Button variant="link" className="text-blue-600 p-0 h-auto">
            View all Task
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-auto"
                onClick={() => handleTaskToggle(task.id, task.status)}
              >
                {task.status === "completed" ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                ) : (
                  <Circle className="h-4 w-4 text-gray-400" />
                )}
              </Button>
              <span className={`text-sm ${task.status === "completed" ? "line-through text-gray-500" : ""}`}>
                {task.title}
              </span>
            </div>
            <div className="flex gap-2">
              {task.status === "completed" && (
                <Badge variant="outline" className="text-xs text-blue-600 border-blue-200">
                  Mark Completed
                </Badge>
              )}
              <Button variant="link" className="text-blue-600 p-0 h-auto text-xs">
                Comment
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
