import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "PKP ",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Master Data",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Kategori",
          url: route('kategori.index'),
        },
        {
          title: "Ranting",
          url: "#",
        },
        {
          title: "PAC&PKPT",
          url: "#",
        },
        {
          title: "Jabatan Kepengurusan",
          url: "#",
        },
        {
          title: "Pimpinan Komisariat",
          url: "#",
        },
      ],
    },
    {
      title: "Informasi",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Berita",
          url: route('berita.index'),
        },
        {
          title: "Artikel",
          url: "#",
        },
        {
          title: "Program Kerja",
          url: "#",
        },
      ],
    },
    {
      title: "Kepengurusan",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Staf",
          url: "#",
        },
        {
          title: "Anggota",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Pengguna",
          url: "#",
        },
        {
          title: "Hak Akses",
          url: "#",
        },
        {
          title: "Profile - Sejarah",
          url: "#",
        },
        {
          title: "Profile - Visi & Misi",
          url: "#",
        },
        {
          title: "Profile - Makna Logo",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Administrasi",
      url: "#",
      icon: Frame,
    },
    {
      name: "Surat Menyurat",
      url: "#",
      icon: PieChart,
    },
  ],
}

export function AppSidebar({
  user, ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <span className="text-base font-semibold">Backoffice.</span>
              </a>
            </SidebarMenuButton>
            <hr />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
