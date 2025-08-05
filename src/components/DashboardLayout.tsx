import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to MAKAY Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your dashboard is loading...</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dashboard components will appear here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
