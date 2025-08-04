import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"

export function TimeoffSection() {
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
      </CardHeader>
      <CardContent className="space-y-4">
        <Button variant="outline" className="w-full justify-between bg-transparent">
          Request Other Timeoffs
          <ChevronDown className="h-4 w-4" />
        </Button>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold mb-1">20</div>
            <div className="text-xs text-gray-600 mb-2">Days</div>
            <div className="text-sm font-medium">Annual Timeoff</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold mb-1">5</div>
            <div className="text-xs text-gray-600 mb-2">Days</div>
            <div className="text-sm font-medium">Sick Timeoff</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold mb-1">10</div>
            <div className="text-xs text-gray-600 mb-2">Days</div>
            <div className="text-sm font-medium">Pet Timeoff</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
