import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAppSelector } from "../hooks/useAppSelector"

export function MyTeams() {
  const { teamMembers } = useAppSelector((state) => state.dashboard)

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">My Teams</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">{member.name}</div>
                <div className="text-xs text-gray-500">{member.role}</div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 bg-transparent">
              Contact
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
