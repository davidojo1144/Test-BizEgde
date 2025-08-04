"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TimeoffRequestFormProps {
  type: "vacation" | "pet"
  onCancel: () => void
}

export function TimeoffRequestForm({ type, onCancel }: TimeoffRequestFormProps) {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const typeConfig = {
    vacation: {
      title: "Vacation Timeoff",
      period: "Jan - Dec 2023",
      defaultDays: 5,
    },
    pet: {
      title: "Pet Timeoff",
      period: "Jan - Dec 2023",
      defaultDays: 5,
    },
  }

  const config = typeConfig[type]

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{config.title}</CardTitle>
        <p className="text-sm text-gray-600">{config.period}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold">{config.defaultDays}</div>
          <div className="text-sm text-gray-600">Days</div>
          <div className="text-xs text-gray-500">Paid Timeoff</div>
        </div>

        <div className="space-y-3">
          <div>
            <Label htmlFor="start-date" className="text-xs text-gray-600">
              Start date
            </Label>
            <Input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="end-date" className="text-xs text-gray-600">
              Requested Date
            </Label>
            <Input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
            Request Timeoff
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
            View Policy Details
          </Button>
        </div>

        <Button variant="outline" className="w-full bg-transparent" onClick={onCancel}>
          Cancel
        </Button>
      </CardContent>
    </Card>
  )
}
