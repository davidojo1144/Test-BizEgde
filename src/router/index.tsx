"use client"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import { DashboardLayout } from "../components/DashboardLayout"
import { TimeoffLayout } from "../components/TimeoffLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
      },
      {
        path: "/timeoff",
        element: <TimeoffLayout />,
      },
      {
        path: "/benefits",
        element: <DashboardLayout />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
