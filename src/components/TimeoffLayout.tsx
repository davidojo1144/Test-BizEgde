import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TimeoffLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Timeoff Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Timeoff features will appear here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
