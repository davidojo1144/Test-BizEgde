import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAppSelector } from "../hooks/useAppSelector"

export function TimeoffRecord() {
  const { timeoffRequests } = useAppSelector((state) => state.dashboard)

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Timeoff Record</CardTitle>
          <Button variant="link" className="text-blue-600 p-0 h-auto">
            View All Record
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <Button variant="outline" size="sm" className="bg-gray-100 flex items-center gap-2">
            Upcoming
            <Badge variant="destructive" className="rounded-full w-4 h-4 p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-2">
            Ongoing
            <Badge variant="destructive" className="rounded-full w-4 h-4 p-0 flex items-center justify-center text-xs">
              2
            </Badge>
          </Button>
        </div>

        <div className="space-y-3">
          {timeoffRequests.map((request) => (
            <div key={request.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{request.user.name}</div>
                  <div className="text-xs text-gray-500">{request.user.role}</div>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-yellow-100 text-yellow-800 mb-1">({request.days} Days)</Badge>
                <div className="text-xs text-gray-500">
                  Start Date: {request.startDate} | End Date: {request.endDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
