import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useAppSelector } from "../hooks/useAppSelector"

export function Benefits() {
  const { benefits } = useAppSelector((state) => state.dashboard)

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Benefits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="p-4 border rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-lg ${benefit.color === "blue" ? "bg-blue-100" : "bg-red-100"} flex items-center justify-center`}
                >
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{benefit.name}</h3>
                  <p className="text-xs text-gray-600">{benefit.provider}</p>
                  <p className="text-xs text-gray-600">
                    {benefit.dependents} Dependent{benefit.dependents !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {benefit.websiteUrl && (
                <Button
                  variant="link"
                  className={`p-0 h-auto text-xs mb-3 ${benefit.color === "blue" ? "text-blue-600" : "text-red-600"}`}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Visit Website
                </Button>
              )}

              <Button variant="outline" className="w-full text-sm bg-transparent">
                View
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
