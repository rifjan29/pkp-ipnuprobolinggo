import IndicatorBar from "@/Components/frontend/indicator";
import SearchDialog from "@/Components/frontend/search-dialog";
import WorkPlanCard from "@/Components/frontend/work-plan-card";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head } from "@inertiajs/react";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

// Dummy data for work plans
const dummyWorkPlans = [
  {
    id: 1,
    title: "Pelatihan Kader Dasar",
    division: "Kaderisasi",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Program pelatihan dasar untuk kader baru IPNU IPPNU Kota Probolinggo dengan materi keorganisasian, kepemimpinan, dan nilai-nilai ahlussunnah wal jamaah.",
  },
  {
    id: 2,
    title: "Bakti Sosial Santri",
    division: "Sosial",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Kegiatan bakti sosial yang melibatkan santri untuk membantu masyarakat kurang mampu di sekitar pondok pesantren dengan pembagian sembako dan pengobatan gratis.",
  },
  {
    id: 3,
    title: "Festival Seni Islami",
    division: "Seni & Budaya",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Festival seni yang menampilkan berbagai kesenian islami seperti hadrah, qasidah, dan kaligrafi untuk melestarikan budaya islam di kalangan pemuda.",
  },
  {
    id: 4,
    title: "Seminar Kepemimpinan",
    division: "Pengembangan SDM",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Seminar yang bertujuan untuk meningkatkan jiwa kepemimpinan anggota IPNU IPPNU dengan menghadirkan tokoh-tokoh nasional sebagai pembicara.",
  },
  {
    id: 5,
    title: "Gerakan Literasi Santri",
    division: "Pendidikan",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Program untuk meningkatkan minat baca dan kemampuan literasi santri melalui pendirian pojok baca dan kegiatan diskusi buku rutin.",
  },
  {
    id: 6,
    title: "Pelatihan Wirausaha Muda",
    division: "Ekonomi",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Pelatihan kewirausahaan untuk anggota IPNU IPPNU agar memiliki keterampilan berwirausaha dan kemandirian ekonomi setelah lulus dari pesantren.",
  },
  {
    id: 7,
    title: "Kajian Kitab Kuning",
    division: "Keagamaan",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Program kajian rutin kitab-kitab klasik untuk memperdalam pemahaman agama dan melestarikan tradisi keilmuan pesantren di kalangan santri muda.",
  },
  {
    id: 8,
    title: "Turnamen Olahraga Santri",
    division: "Olahraga",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Kompetisi olahraga antar santri untuk meningkatkan kebugaran jasmani dan mempererat silaturahmi antar anggota IPNU IPPNU se-Kota Probolinggo.",
  },
]

export default function ProgramUnggulan()
{
    const [workPlans, setWorkPlans] = useState(dummyWorkPlans)
    const [searchQuery, setSearchQuery] = useState("")
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    // Filter work plans based on search query
    useEffect(() => {
        if (searchQuery) {
        const filteredPlans = dummyWorkPlans.filter(
            (plan) =>
            plan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            plan.division.toLowerCase().includes(searchQuery.toLowerCase()) ||
            plan.description.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setWorkPlans(filteredPlans)
        } else {
        setWorkPlans(dummyWorkPlans)
        }
    }, [searchQuery])

    // Handle keyboard shortcut
    useEffect(() => {
        const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "r") {
            e.preventDefault()
            setIsSearchOpen(true)
        }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    const handleSearch = (query) => {
        setSearchQuery(query)
    }

    const clearSearch = () => {
        setSearchQuery("")
    }
    return (
        <>
            <Head title="Program Kerja"/>
            <FrontendLayout>
                <div className="bg-emerald-800 py-12 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white dark:text-gray-800 mb-4">PROGRAM KERJA PC IPNU IPPNU KOTA PROBOLINGGO</h1>
                    <div className="flex justify-center my-5">
                        <IndicatorBar/>
                    </div>
                    </div>
                </div>
                <div className="container mx-auto py-5">
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-8">
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="Cari program kerja atau tekan Ctrl+R..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onClick={() => setIsSearchOpen(true)}
                        />
                        {searchQuery && (
                            <button onClick={clearSearch} className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                            </button>
                        )}
                        </div>
                        <div className="text-center mt-2">
                        <span className="text-sm text-gray-500">
                            Tekan <kbd className="px-2 py-0.5 bg-gray-100 rounded text-xs">Ctrl</kbd> +{" "}
                            <kbd className="px-2 py-0.5 bg-gray-100 rounded text-xs">R</kbd> untuk mencari
                        </span>
                        </div>
                        {searchQuery && (
                        <div className="text-center mt-2">
                            <span className="text-sm text-emerald-600">
                            Menampilkan {workPlans.length} hasil untuk "{searchQuery}"
                            </span>
                        </div>
                        )}
                    </div>
                    {/* Work Plan Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workPlans.length > 0 ? (
                        workPlans.map((plan) => (
                            <WorkPlanCard
                            key={plan.id}
                            id={plan.id}
                            title={plan.title}
                            division={plan.division}
                            image={plan.image}
                            description={plan.description}
                            />
                        ))
                        ) : (
                        <div className="col-span-full text-center py-10">
                            <div className="max-w-md mx-auto">
                            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-gray-700 mb-2">Tidak ada program kerja yang ditemukan</h3>
                            <p className="text-gray-500 mb-4">Coba gunakan kata kunci lain atau hapus filter pencarian</p>
                            <button
                                onClick={clearSearch}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                            >
                                Hapus Pencarian
                            </button>
                            </div>
                        </div>
                        )}
                    </div>

                    {/* Search Dialog */}
                    <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSearch={handleSearch} />
                </div>
            </FrontendLayout>
        </>
    )
}
