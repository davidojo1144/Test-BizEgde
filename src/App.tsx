"use client"

import { Provider } from "react-redux"
import { store } from "./store"
import { Header } from "./components/Header"
import { DashboardLayout } from "./components/DashboardLayout"
import { useAppSelector } from "./hooks/useAppSelector"
import { useAppDispatch } from "./hooks/useAppDispatch"
import { toggleFeeds, toggleCompactView } from "./store/dashboardSlice"
import { Button } from "@/components/ui/button"

function DashboardContent() {
  const { user, showFeeds, compactView } = useAppSelector((state) => state.dashboard)
  const dispatch = useAppDispatch()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-6">
        <div className="mb-6">
          <p className="text-gray-600">Good Morning,</p>
          <h1 className="text-2xl font-bold">{user?.name}</h1>
        </div>

        <div className="flex gap-2 mb-6">
          <Button variant="outline" size="sm" onClick={() => dispatch(toggleFeeds())}>
            {showFeeds ? "Hide Feeds" : "Show Feeds"}
          </Button>
          <Button variant="outline" size="sm" onClick={() => dispatch(toggleCompactView())}>
            {compactView ? "Full Menu" : "Hide Menu"}
          </Button>
        </div>

        <DashboardLayout />
      </main>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <DashboardContent />
    </Provider>
  )
}

export default App
