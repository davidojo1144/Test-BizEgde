import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAppSelector } from "../hooks/useAppSelector"

export function AttendanceStats() {
  const { attendanceStats } = useAppSelector((state) => state.dashboard)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Your Attendance Snapshot - January</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              Punctuality Performance
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">i</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-4">{attendanceStats.punctualityPerformance}%</div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-blue-100 p-3 rounded">
                <div className="text-gray-600">Days Present</div>
                <div className="font-semibold">{attendanceStats.daysPresent}%</div>
              </div>
              <div className="bg-blue-200 p-3 rounded">
                <div className="text-gray-600">Unauthorized Absent</div>
                <div className="font-semibold">{attendanceStats.unauthorizedAbsent}%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              Attendance Performance
              <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">i</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-4">{attendanceStats.attendancePerformance}%</div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-orange-100 p-3 rounded">
                <div className="text-gray-600">Days Present</div>
                <div className="font-semibold">{attendanceStats.daysPresent}%</div>
              </div>
              <div className="bg-orange-200 p-3 rounded">
                <div className="text-gray-600">Unauthorized Absent</div>
                <div className="font-semibold">{attendanceStats.unauthorizedAbsent}%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
