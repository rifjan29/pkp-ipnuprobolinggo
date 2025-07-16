"use client"

import { AppSidebar } from "@/Components/app-sidebar"
import { SiteHeader } from "@/Components/site-header"
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar"
import { Head, usePage, router } from "@inertiajs/react"
import { useState } from "react"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Badge } from "@/Components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu"
import { KategoriDrawer } from "@/Components/kategori-drawer"
import { Plus, Search, MoreHorizontal, Edit, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { Toaster } from "@/Components/ui/sonner"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"

export default function List({ auth, kategoris }) {
    const { props } = usePage()
    const user = props.user
    const { flash } = usePage().props
    const [searchTerm, setSearchTerm] = useState("")
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [editingKategori, setEditingKategori] = useState(null)

    // Filter kategoris based on search term
    const filteredKategoris =
        kategoris?.filter(
        (kategori) =>
            kategori.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            kategori.keterangan?.toLowerCase().includes(searchTerm.toLowerCase()),
        ) || []

    const handleCreate = () => {
        setEditingKategori(null)
        setDrawerOpen(true)
    }

    const handleEdit = (kategori) => {
        setEditingKategori(kategori)
        setDrawerOpen(true)
    }

    const handleDelete = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus kategori ini?")) {
        router.delete(route("kategori.destroy", id), {
            onSuccess: () => {
            toast.success("Kategori berhasil dihapus")
            },
            onError: () => {
            toast.error("Gagal menghapus kategori")
            },
        })
        }
    }

    const getStatusBadge = (status) => {
        return status === "berita" ? (
        <Badge variant="default" className="bg-blue-100 text-blue-800">
            Berita
        </Badge>
        ) : (
        <Badge variant="secondary" className="bg-green-100 text-green-800">
            Artikel
        </Badge>
        )
    }
    // Show flash messages
    if (flash.success) {
        toast.success(flash.success)
    }
    if (flash.error) {
        toast.error(flash.error)
    }

    return (
        <AuthenticatedLayout>
            <Head title="Kategori" />
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 md:px-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div>
                        <h1 className="text-2xl font-bold tracking-tight">Kategori</h1>
                        <p className="text-muted-foreground">Kelola kategori Berita atau Informasi</p>
                        </div>
                        <Button onClick={handleCreate}>
                        <Plus className="mr-2 h-4 w-4" />
                        Tambah Kategori
                        </Button>
                    </div>

                    {/* Search */}
                    <div className="flex items-center space-x-2">
                        <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Cari kategori..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-8"
                        />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="rounded-md border">
                        <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Nama</TableHead>
                            <TableHead>Deskripsi</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Dibuat</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredKategoris.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8">
                                <div className="text-muted-foreground">
                                    {searchTerm ? "Tidak ada kategori yang ditemukan" : "Belum ada kategori"}
                                </div>
                                </TableCell>
                            </TableRow>
                            ) : (
                            filteredKategoris.map((kategori) => (
                                <TableRow key={kategori.id}>
                                <TableCell className="font-medium">{kategori.name}</TableCell>
                                <TableCell>{kategori.keterangan || "-"}</TableCell>
                                <TableCell>{getStatusBadge(kategori.status)}</TableCell>
                                <TableCell>{new Date(kategori.created_at).toLocaleDateString("id-ID")}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                        <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => handleEdit(kategori)}>
                                        <Edit className="mr-2 h-4 w-4" />
                                        Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleDelete(kategori.id)} className="text-red-600">
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Hapus
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                                </TableRow>
                            ))
                            )}
                        </TableBody>
                        </Table>
                    </div>
                    </div>
                </div>
            </div>

            {/* Drawer for Create/Edit */}
            <KategoriDrawer open={drawerOpen} onOpenChange={setDrawerOpen} kategori={editingKategori} />

        </AuthenticatedLayout>
    )
}
