"use client"

import { Card, CardContent, CardHeader } from "@/Components/ui/card"
import FrontendLayout from "@/Layouts/FrontendLayout"
import { Head } from "@inertiajs/react"
import { useState } from "react"

// Dummy data for departments and their work plans
const departments = [
  { id: 1, name: "Departemen Organisasi", color: "bg-blue-500", textColor: "text-blue-700" },
  { id: 2, name: "Departemen Dakwah", color: "bg-green-500", textColor: "text-green-700" },
  { id: 3, name: "Departemen Pendidikan", color: "bg-purple-500", textColor: "text-purple-700" },
  { id: 4, name: "Departemen Sosial", color: "bg-orange-500", textColor: "text-orange-700" },
  { id: 5, name: "Departemen Keuangan", color: "bg-red-500", textColor: "text-red-700" },
  { id: 6, name: "Departemen Humas", color: "bg-pink-500", textColor: "text-pink-700" },
]

const workPlans = [
  {
    id: 1,
    title: "Rapat Koordinasi Bulanan",
    department: 1,
    date: "2024-01-15",
    time: "09:00",
    duration: "2 jam",
    description: "Koordinasi program kerja dan evaluasi bulan sebelumnya",
  },
  {
    id: 2,
    title: "Kajian Rutin Mingguan",
    department: 2,
    date: "2024-01-16",
    time: "19:30",
    duration: "1.5 jam",
    description: "Kajian rutin setiap Selasa malam",
  },
  {
    id: 3,
    title: "Workshop Leadership",
    department: 3,
    date: "2024-01-18",
    time: "08:00",
    duration: "6 jam",
    description: "Pelatihan kepemimpinan untuk kader muda",
  },
  {
    id: 4,
    title: "Bakti Sosial",
    department: 4,
    date: "2024-01-20",
    time: "07:00",
    duration: "4 jam",
    description: "Kegiatan sosial di daerah terdampak bencana",
  },
  {
    id: 5,
    title: "Audit Keuangan",
    department: 5,
    date: "2024-01-22",
    time: "10:00",
    duration: "3 jam",
    description: "Pemeriksaan laporan keuangan triwulan",
  },
  {
    id: 6,
    title: "Press Conference",
    department: 6,
    date: "2024-01-25",
    time: "14:00",
    duration: "2 jam",
    description: "Konferensi pers program baru organisasi",
  },
  {
    id: 7,
    title: "Pelatihan Organisasi",
    department: 1,
    date: "2024-01-28",
    time: "13:00",
    duration: "4 jam",
    description: "Pelatihan manajemen organisasi untuk pengurus",
  },
  {
    id: 8,
    title: "Tabligh Akbar",
    department: 2,
    date: "2024-01-30",
    time: "20:00",
    duration: "2 jam",
    description: "Ceramah umum bulanan",
  },
]

// Calendar component
function Calendar({ currentDate, selectedDepartments, onEventClick }) {
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const getEventsForDate = (day) => {
    if (!day) return []
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return workPlans.filter((plan) => plan.date === dateStr && selectedDepartments.includes(plan.department))
  }

  const getDepartmentById = (id) => departments.find((d) => d.id === id)

  return (
    <Card className="card rounded-none shadow-none">
      <CardContent className="card-content">
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 my-4">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
            <div key={day} className="p-2 text-center font-semibold text-gray-600 bg-gray-100 rounded">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {getDaysInMonth(currentDate).map((day, index) => {
            const events = day ? getEventsForDate(day) : []
            return (
              <div
                key={index}
                className={`min-h-[120px] p-2 border rounded-lg ${day ? "bg-white hover:bg-gray-50" : "bg-gray-50"}`}
              >
                {day && (
                  <>
                    <div className="font-semibold text-gray-900 mb-1">{day}</div>
                    <div className="space-y-1">
                      {events.map((event) => {
                        const dept = getDepartmentById(event.department)
                        return (
                          <div
                            key={event.id}
                            className={`p-1 rounded text-xs cursor-pointer hover:opacity-80 ${dept?.color} text-white`}
                            onClick={() => onEventClick(event)}
                          >
                            <div className="font-medium truncate">{event.title}</div>
                            <div className="text-xs opacity-90">{event.time}</div>
                          </div>
                        )
                      })}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

// Department Filter component
function DepartmentFilter({ departments, selectedDepartments, onToggleDepartment }) {
  return (
    <Card className="card rounded-none shadow-none">
      <CardHeader className="card-header">
        <h3 className="text-lg font-bold">Filter Departemen</h3>
      </CardHeader>
      <CardContent>
        <div className="card-content space-y-3">
            {departments.map((dept) => (
            <div key={dept.id} className="flex items-center space-x-2">
                <input
                type="checkbox"
                id={`dept-${dept.id}`}
                checked={selectedDepartments.includes(dept.id)}
                onChange={() => onToggleDepartment(dept.id)}
                className="checkbox"
                />
                <label htmlFor={`dept-${dept.id}`} className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                <div className={`w-3 h-3 rounded-full ${dept.color}`}></div>
                {dept.name}
                </label>
            </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Event Details component
function EventDetails({ event }) {
  if (!event) return null

  const dept = departments.find((d) => d.id === event.department)

  return (
    <Card className="card mt-4 rounded-none shadow-none">
      <CardHeader className="card-header">
        <h3 className="text-lg font-bold font-heading">Detail Kegiatan</h3>
        <hr />
      </CardHeader>
      <CardContent>
        <div className="card-content space-y-3">
            <h3 className="font-bold text-lg font-heading">{event.title}</h3>
            <hr />
            <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${dept?.color}`}></div>
                <span>{dept?.name}</span>
            </div>
            <p>
                <strong>Tanggal:</strong> {event.date}
            </p>
            <p>
                <strong>Waktu:</strong> {event.time}
            </p>
            <p>
                <strong>Durasi:</strong> {event.duration}
            </p>
            <p>
                <strong>Deskripsi:</strong> {event.description}
            </p>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Upcoming Events component
function UpcomingEvents({ events, selectedDepartments, onEventClick }) {
  const filteredEvents = events.filter((plan) => selectedDepartments.includes(plan.department)).slice(0, 5)

  return (
    <div className="card mt-6">
      <div className="card-header">
        <h3 className="text-lg font-bold">Kegiatan Mendatang</h3>
      </div>
      <div className="card-content">
        <div className="space-y-3">
          {filteredEvents.map((plan) => {
            const dept = departments.find((d) => d.id === plan.department)
            return (
              <div
                key={plan.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => onEventClick(plan)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${dept?.color}`}></div>
                  <div>
                    <h4 className="font-medium">{plan.title}</h4>
                    <p className="text-sm text-gray-600">
                      {plan.date} • {plan.time}
                    </p>
                  </div>
                </div>
                <div className={`badge ${dept?.textColor}`}>{dept?.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Main AgendaKegiatan component
function AgendaKegiatan() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1)) // January 2024
  const [selectedDepartments, setSelectedDepartments] = useState(departments.map((d) => d.id))
  const [selectedEvent, setSelectedEvent] = useState(null)

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const toggleDepartment = (deptId) => {
    setSelectedDepartments((prev) => (prev.includes(deptId) ? prev.filter((id) => id !== deptId) : [...prev, deptId]))
  }

  return (
    <>
        <Head title="Agenda Kegiatan"/>
        <FrontendLayout>

            <div className="min-h-screen  p-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="rounded-none shadow-none p-3" >
                            <DepartmentFilter
                            departments={departments}
                            selectedDepartments={selectedDepartments}
                            onToggleDepartment={toggleDepartment}
                            />

                            {/* Event Details */}
                            {selectedEvent && <EventDetails event={selectedEvent} />}
                        </div>
                    </div>

                    {/* Calendar */}
                    <div className="lg:col-span-3">
                        <Card className="card rounded-none p-3 mb-3 shadow-none">
                            <div className="card-header flex items-center justify-between">
                                <h2 className="text-2xl font-bold">
                                    {currentDate.toLocaleString("id-ID", { month: "long", year: "numeric" })}
                                </h2>
                                <div className="flex items-center gap-2">
                                <button className="btn-outline" onClick={() => navigateMonth("prev")}>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    >
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                </button>
                                <button className="btn-outline" onClick={() => navigateMonth("next")}>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </button>
                                </div>
                            </div>
                        </Card>

                        <Calendar
                        currentDate={currentDate}
                        selectedDepartments={selectedDepartments}
                        onEventClick={setSelectedEvent}
                        />

                        <UpcomingEvents
                        events={workPlans}
                        selectedDepartments={selectedDepartments}
                        onEventClick={setSelectedEvent}
                        />
                    </div>
                    </div>
                </div>
            </div>

        </FrontendLayout>
    </>
  )
}

export default AgendaKegiatan
