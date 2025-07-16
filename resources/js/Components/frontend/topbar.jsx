"use client"

import { useState, useEffect, useRef } from "react"
import { Link, usePage } from "@inertiajs/react"
import { Menu, X, Moon, Sun, Globe, ChevronDown } from "lucide-react"

export default function Topbar({ auth }) {
  const { url } = usePage()
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isArtikelOpen, setIsArtikelOpen] = useState(false)
  const [isProgramOpen, setIsProgramOpen] = useState(false)
  const [language, setLanguage] = useState("id") // 'id' for Indonesian, 'en' for English
  const [theme, setTheme] = useState("light")

  // State for dropdown menus
  const [activeDropdown, setActiveDropdown] = useState(null) // 'profile', 'artikel', or 'program'

  // Refs for dropdown menus
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const isActive = (path) => {
    return url.startsWith(path) ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"
  }

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id")
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)

    // Apply theme to document
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  // Initialize theme on component mount
  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Save theme preference when it changes
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const menuItems = {
    id: {
      beranda: "Beranda",
      profile: "Profile",
      sejarah: "Sejarah",
      visiMisi: "Visi & Misi",
      maknaLogo: "Makna Logo",
      kepengurusan: "Kepengurusan Rekan-Rekanita",
      artikel: "Artikel & Berita",
      programKerja: "Program Kerja",
      darkMode: "Mode Gelap",
      lightMode: "Mode Terang",
      language: "Bahasa",
      learnMore: "Selengkapnya",
    },
    en: {
      beranda: "Home",
      profile: "Profile",
      sejarah: "History",
      visiMisi: "Vision & Mission",
      maknaLogo: "Logo Meaning",
      kepengurusan: "Management",
      artikel: "Articles & News",
      programKerja: "Work Programs",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      language: "Language",
      learnMore: "Learn more",
    },
  }

  const t = menuItems[language]

  // Card data for each dropdown
   const profileCards = [
    {
      title: t.sejarah,
      image:
        "https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Sejarah panjang organisasi IPNU & IPPNU Kota Probolinggo.",
      link: "/profile/sejarah",
    },
    {
      title: t.visiMisi,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Tujuan dan arah organisasi untuk masa depan yang lebih baik.",
      link: "/profile/visi-misi",
    },
    {
      title: t.maknaLogo,
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Filosofi dan makna di balik logo organisasi kita.",
      link: "/profile/makna-logo",
    },
  ]

    const artikelCards = [
    {
      title: "Artikel Terbaru",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Artikel dan berita terbaru dari organisasi IPNU & IPPNU.",
      link: route('blog-section.index'),
    },
    {
      title: "Berita Terbaru",
      image:
        "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Berbagai kategori artikel dan berita organisasi.",
      link: route('news-section.index'),
    },
    {
      title: "Galeri Kegiatan",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Dokumentasi kegiatan organisasi dalam bentuk foto dan video.",
      link: "/artikel/galeri",
    },
  ]

  const programCards = [
    {
      title: "Program Kerja",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Program-program unggulan IPNU & IPPNU Kota Probolinggo.",
      link: route('program-unggulan.index'),
    },
    {
      title: "Agenda Kegiatan",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Jadwal dan agenda kegiatan yang akan datang.",
      link: route('agenda-kegiatan.index'),
    },
  ]

  // Function to toggle dropdown menus
  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  // Get cards based on active dropdown
  const getActiveCards = () => {
    switch (activeDropdown) {
      case "profile":
        return profileCards
      case "artikel":
        return artikelCards
      case "program":
        return programCards
      default:
        return []
    }
  }

  return (
    <div className="bg-white dark:bg-zinc-950 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <img src="/placeholder.svg?height=40&width=40" alt="PC IPNU & IPPNU Logo" className="h-10 w-10" />
                <span className="font-heading ml-2 text-lg font-bold text-emerald-800">PC IPNU & IPPNU Kota Probolinggo</span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`${isActive("/")} font-heading font-semibold dark:text-gray-300 transition-colors`}>
              {t.beranda}
            </Link>

            <div className="relative">
              <button
                className={`${isActive("/profile")} font-heading font-semibold dark:text-gray-300 transition-colors flex items-center`}
                onClick={() => toggleDropdown("profile")}
              >
                {t.profile}{" "}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "profile" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <Link href={route('staf.index')} className={`${isActive("/kepengurusan")} font-heading font-semibold dark:text-gray-300 transition-colors`}>
              {t.kepengurusan}
            </Link>

            <div className="relative">
              <button
                className={`${isActive("/artikel")} font-heading font-semibold dark:text-gray-300 transition-colors flex items-center`}
                onClick={() => toggleDropdown("artikel")}
              >
                {t.artikel}{" "}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "artikel" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <div className="relative">
              <button
                className={`${isActive("/program-kerja")} font-heading font-semibold dark:text-gray-300 transition-colors flex items-center`}
                onClick={() => toggleDropdown("program")}
              >
                {t.programKerja}{" "}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "program" ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-400 hover:bg-gray-800" aria-label="Toggle theme">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-gray-400 hover:bg-gray-800 flex items-center"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-bold">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      {activeDropdown && (
        <div ref={dropdownRef} className="absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 py-6 px-4 animate-fadeIn">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getActiveCards().map((card, index) => (
                <Link key={index} href={card.link} className="block group" onClick={() => setActiveDropdown(null)}>
                  <div className="rounded-lg overflow-hidden">
                    <img src={card.image || "/placeholder.svg"} alt={card.title} className="w-full h-32 object-cover" />
                  </div>
                  <h3 className="font-heading mt-3 font-semibold text-gray-800 dark:text-emerald-100">{card.title}</h3>
                  <p className="font-body mt-1 text-sm text-gray-600 dark:text-white">{card.description}</p>
                  <div className="font-body mt-2 text-emerald-600 text-sm flex items-center group-hover:underline">
                    {t.learnMore}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-50 hover:text-emerald-600"
              onClick={() => setIsOpen(false)}
            >
              {t.beranda}
            </Link>

            <div>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-50 hover:text-emerald-600"
              >
                {t.profile}
                <ChevronDown className={`h-4 w-4 transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
              </button>

              {isProfileOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    href={route('sejarah.index')}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-50 hover:text-emerald-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.sejarah}
                  </Link>
                  <Link
                    href={route('visi-misi.index')}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-50 hover:text-emerald-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.visiMisi}
                  </Link>
                  <Link
                    href="/profile/makna-logo"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-50 hover:text-emerald-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.maknaLogo}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/kepengurusan"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-50 hover:text-emerald-600"
              onClick={() => setIsOpen(false)}
            >
              {t.kepengurusan}
            </Link>

            <div>
              <button
                onClick={() => setIsArtikelOpen(!isArtikelOpen)}
                className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-50 hover:text-emerald-600"
              >
                {t.artikel}
                <ChevronDown className={`h-4 w-4 transition-transform ${isArtikelOpen ? "rotate-180" : ""}`} />
              </button>

              {isArtikelOpen && (
                <div className="pl-6 space-y-1">
                  {artikelCards.map((card, index) => (
                    <Link
                      key={index}
                      href={card.link}
                      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-50 hover:text-emerald-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {card.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setIsProgramOpen(!isProgramOpen)}
                className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-50 hover:text-emerald-600"
              >
                {t.programKerja}
                <ChevronDown className={`h-4 w-4 transition-transform ${isProgramOpen ? "rotate-180" : ""}`} />
              </button>

              {isProgramOpen && (
                <div className="pl-6 space-y-1">
                  {programCards.map((card, index) => (
                    <Link
                      key={index}
                      href={card.link}
                      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-50 hover:text-emerald-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {card.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4 px-3 py-2">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100" aria-label="Toggle theme">
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>

              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-gray-100 flex items-center"
                aria-label="Toggle language"
              >
                <Globe className="h-5 w-5" />
                <span className="ml-1 text-xs font-bold">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
