"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Instagram, Github } from "lucide-react"
import FrontendLayout from "@/Layouts/FrontendLayout"
import { Head } from "@inertiajs/react"
import IndicatorBar from "@/Components/frontend/indicator"

const dummyMembers = [
  {
    id: 1,
    name: "Farda Rezkiya Zulfa",
    position: "Kepala Divisi",
    division: "HUMAS",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Nandini Putri Hanifa Jannah",
    position: "Kepala Sub Divisi",
    division: "HUMAS",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Muhammad Fawwaz Aydin",
    position: "Staff Sub Divisi",
    division: "HUMAS",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Ahmad Rizki Pratama",
    position: "Kepala Divisi",
    division: "BPI",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 5,
    name: "Siti Nurhaliza",
    position: "Staff Divisi",
    division: "BPI",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "Budi Santoso",
    position: "Kepala Divisi",
    division: "KWU",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 7,
    name: "Diana Putri",
    position: "Staff Divisi",
    division: "LITBANG",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 8,
    name: "Eko Prasetyo",
    position: "Kepala Divisi",
    division: "MEDIATEK",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      github: "#",
    },
  },
  {
    id: 9,
    name: "Fitri Handayani",
    position: "Staff Divisi",
    division: "PSDM",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
      github: "#",
    },
  },
]

const divisions = ["ALL", "BPI", "DEPARTEMEN ORGANISASI", "DEPARTEMEN KADERISASI", "DEPARTEMEN OLAHRAGA SENI & BUDAYA ", "DEPARTEMEN DAKWAH", "DEPARTEMEN MEDIA"]

export default function StafContent() {
  const [selectedPeriod, setSelectedPeriod] = useState("ARUNACHAKRA - 2024/2025")
  const [activeDivision, setActiveDivision] = useState("HUMAS")

  const filteredMembers =
    activeDivision === "ALL" ? dummyMembers : dummyMembers.filter((member) => member.division === activeDivision)

  return (
    <>
    <Head title="Kepengurusan - PC IPNU & IPPNU Kota Probolinggo" />
    <FrontendLayout>
        <div className="min-h-screen ">
        {/* Header */}
        <div className="bg-emerald-800 py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white dark:text-gray-800 mb-4">KEPENGURUSAN PC IPNU IPPNU KOTA PROBOLINGGO</h1>
            <span className="font-body text-white dark:text-gray-800"> Periode 2024/2025</span>
            <div className="flex justify-center my-5">
                <IndicatorBar/>
            </div>
            <h4 className='font-heading text-lg font-semibold italic text-center text-white'>"Siapa yang mau mengurus NU, aku anggap dia santriku, dan siapa yang menjadi santriku aku doakan Khusnul Khotimah beserta anak cucunya."</h4>
            <span className='text-center font-semibold font-body flex justify-center text-md text-yellow-400'>— Hadratussyeikh KH. Hasyim Asy'ari</span>
            </div>
        </div>

        {/* Controls */}
        <div className="container mx-auto px-4 py-8">
            {/* Period Selector */}
            <div className="mb-6">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-full max-w-md border-emerald-6s00 text-emerald-700">
                <SelectValue />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="ARUNACHAKRA - 2024/2025">IPNU - 2024/2025</SelectItem>
                <SelectItem value="PREVIOUS - 2023/2024">IPPNU - 2023/2024</SelectItem>
                </SelectContent>
            </Select>
            </div>

            {/* Division Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
            {divisions.map((division) => (
                <Button
                key={division}
                variant={activeDivision === division ? "default" : "outline"}
                onClick={() => setActiveDivision(division)}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                    activeDivision === division
                    ? "bg-emerald-900 hover:bg-emerald-700 text-white"
                    : "border-emerald-200 text-emerald-900 hover:bg-emerald-50"
                }`}
                >
                {division}
                </Button>
            ))}
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                    <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold mb-1">HUMAS</div>
                    <div className="text-sm opacity-90">Hubungan Masyarakat</div>
                    </div>
                </div>
                <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 mb-4">
                    Hubungan Masyarakat
                    </Badge>
                    <p className="text-gray-600 mb-4">{member.position}</p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                    {member.socialLinks.linkedin && (
                        <a
                        href={member.socialLinks.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                        <Linkedin className="w-5 h-5" />
                        </a>
                    )}
                    {member.socialLinks.instagram && (
                        <a
                        href={member.socialLinks.instagram}
                        className="text-gray-400 hover:text-pink-600 transition-colors"
                        >
                        <Instagram className="w-5 h-5" />
                        </a>
                    )}
                    {member.socialLinks.github && (
                        <a href={member.socialLinks.github} className="text-gray-400 hover:text-gray-800 transition-colors">
                        <Github className="w-5 h-5" />
                        </a>
                    )}
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>

            {/* Empty State */}
            {filteredMembers.length === 0 && (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Tidak ada anggota untuk divisi {activeDivision}</p>
            </div>
            )}
        </div>
        </div>
    </FrontendLayout>
    </>
  )
}
