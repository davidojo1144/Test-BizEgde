"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, ChevronUp, Gift } from "lucide-react"
import { useState } from "react"
import { useAppSelector } from "../hooks/useAppSelector"

export function Celebrations() {
  const { celebrations } = useAppSelector((state) => state.dashboard)
  const [showUpcoming, setShowUpcoming] = useState(false)

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Celebrations</CardTitle>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" className="bg-gray-100">
            Birthdays
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500">
            Job Anniversary
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500">
            New Hire
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Today</span>
            <ChevronUp className="h-4 w-4" />
          </div>
          <div className="space-y-3">
            {celebrations.map((celebration) => (
              <div key={celebration.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{celebration.user.name}</div>
                    <div className="text-xs text-gray-500">{celebration.user.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{celebration.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Button
            variant="ghost"
            className="w-full justify-between p-0 h-auto text-sm"
            onClick={() => setShowUpcoming(!showUpcoming)}
          >
            <span>Upcoming Birthdays</span>
            {showUpcoming ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
