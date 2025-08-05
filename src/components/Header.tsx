import { Bell, Grid3X3, Home, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-xl">MAKAY</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Grid3X3 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Info className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-yellow-400 text-black">W</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <nav className="px-6">
        <div className="flex gap-8 overflow-x-auto">
          {[
            "Home",
            "People",
            "Time off",
            "Training",
            "Benefits",
            "Documents",
            "Tasks",
            "Attendance",
            "Payslips",
            "Assets",
            "Shift Rota",
            "Performance Review",
            "Settings",
          ].map((item, index) => (
            <Button
              key={item}
              variant="ghost"
              className={`whitespace-nowrap pb-4 rounded-none border-b-2 ${
                index === 0 ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {item}
            </Button>
          ))}
        </div>
      </nav>
    </header>
  )
}
