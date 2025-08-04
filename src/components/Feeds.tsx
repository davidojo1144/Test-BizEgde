import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAppSelector } from "../hooks/useAppSelector"

export function Feeds() {
  const { feeds } = useAppSelector((state) => state.dashboard)

  const getIconColor = (type: string) => {
    switch (type) {
      case "profile-update":
        return "bg-blue-500"
      case "vacation-request":
        return "bg-orange-500"
      case "payslip":
        return "bg-red-500"
      case "performance":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Feeds</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {feeds.map((feed) => (
          <div key={feed.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div
              className={`w-8 h-8 rounded-full ${getIconColor(feed.type)} flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-white text-xs font-bold">{feed.type.charAt(0).toUpperCase()}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 mb-1">{feed.message}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{feed.timestamp}</span>
                <Button variant="link" className="text-blue-600 p-0 h-auto text-xs">
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
