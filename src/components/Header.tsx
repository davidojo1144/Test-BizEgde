"use client"

import { Bell, Grid3X3, Home, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"
import { setCurrentView } from "../store/dashboardSlice"

interface HeaderProps {
  compactView?: boolean
}

export function Header({ compactView = false }: HeaderProps) {
  const dispatch = useAppDispatch()
  const { currentView } = useAppSelector((state) => state.dashboard)

  const navItems = compactView
    ? [
        { name: "Home", key: "dashboard" },
        { name: "People", key: "people" },
        { name: "Tasks", key: "tasks" },
        { name: "Settings", key: "settings" },
      ]
    : [
        { name: "Home", key: "dashboard" },
        { name: "People", key: "people" },
        { name: "Time off", key: "timeoff" },
        { name: "Training", key: "training" },
        { name: "Benefits", key: "benefits" },
        { name: "Documents", key: "documents" },
        { name: "Tasks", key: "tasks" },
        { name: "Attendance", key: "attendance" },
        { name: "Payslips", key: "payslips" },
        { name: "Assets", key: "assets" },
        { name: "Shift Rota", key: "shift-rota" },
        { name: "Performance Review", key: "performance" },
        { name: "Settings", key: "settings" },
      ]

  const handleNavClick = (key: string) => {
    if (key === "dashboard" || key === "timeoff-requests" || key === "benefits") {
      dispatch(setCurrentView(key as any))
    }
  }

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
          {navItems.map((item) => (
            <Button
              key={item.key}
              variant="ghost"
              className={`whitespace-nowrap pb-4 rounded-none border-b-2 ${
                (item.key === "dashboard" && currentView === "dashboard") || (item.key === currentView)
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => handleNavClick(item.key)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </nav>
    </header>
  )
}
