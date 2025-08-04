"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TimeoffRequestForm } from "./TimeoffRequestForm"

export function TimeoffManagement() {
  const [activeTab, setActiveTab] = useState<"requests" | "my-timeoff">("requests")
  const [showRequestForm, setShowRequestForm] = useState<"vacation" | "pet" | null>(null)

  if (showRequestForm) {
    return (
      <div className="flex justify-center">
        <TimeoffRequestForm type={showRequestForm} onCancel={() => setShowRequestForm(null)} />
      </div>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Timeoff</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            variant={activeTab === "requests" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("requests")}
            className="flex items-center gap-2"
          >
            Requests
            <Badge variant="destructive" className="rounded-full w-4 h-4 p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </Button>
          <Button
            variant={activeTab === "my-timeoff" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("my-timeoff")}
          >
            My Timeoff
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {activeTab === "my-timeoff" && (
          <div className="grid grid-cols-2 gap-4">
            <div
              className="text-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => setShowRequestForm("vacation")}
            >
              <div className="text-lg font-bold mb-1">5</div>
              <div className="text-xs text-gray-600 mb-2">Days</div>
              <div className="text-sm font-medium">Vacation Timeoff</div>
              <div className="text-xs text-gray-500 mt-2">Jan - Dec 2023</div>
            </div>

            <div
              className="text-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => setShowRequestForm("pet")}
            >
              <div className="text-lg font-bold mb-1">5</div>
              <div className="text-xs text-gray-600 mb-2">Days</div>
              <div className="text-sm font-medium">Pet Timeoff</div>
              <div className="text-xs text-gray-500 mt-2">Jan - Dec 2023</div>
            </div>
          </div>
        )}

        {activeTab === "requests" && (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold mb-1">20</div>
              <div className="text-xs text-gray-600 mb-2">Days</div>
              <div className="text-sm font-medium">Annual Timeoff</div>
              <div className="mt-3 space-y-2">
                <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                  Request Timeoff
                </Button>
                <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                  View Policy Details
                </Button>
              </div>
            </div>

            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold mb-1">5</div>
              <div className="text-xs text-gray-600 mb-2">Days</div>
              <div className="text-sm font-medium">Sick Timeoff</div>
              <div className="mt-3 space-y-2">
                <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                  Request Timeoff
                </Button>
                <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                  View Policy Details
                </Button>
              </div>
            </div>

            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold mb-1">10</div>
              <div className="text-xs text-gray-600 mb-2">Days</div>
              <div className="text-sm font-medium">Pet Timeoff</div>
              <div className="mt-3 space-y-2">
                <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                  Request Timeoff
                </Button>
                <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                  View Policy Details
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
