"use client"

import { AppSidebar } from "@/Components/app-sidebar"
import { SiteHeader } from "@/Components/site-header"
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar"
import { Head, usePage, router } from "@inertiajs/react"
import { useEffect, useState } from "react"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Badge } from "@/Components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu"
import { KategoriDrawer } from "@/Components/kategori-drawer"
import { Plus, Search, MoreHorizontal, Edit, Trash2, PersonStanding } from "lucide-react"
import { toast } from "sonner"
import { Toaster } from "@/Components/ui/sonner"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Card } from "@/Components/ui/card"
import { PimpinanCabangDrawer } from "@/Components/pimpinan-cabang-drawer"

export default function List({ auth, pimpinanCabang }) {
    const { props } = usePage()
    const user = props.user
    const { flash } = usePage().props
    const [searchTerm, setSearchTerm] = useState("")
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [editingPimpinanCabang, setEditingPimpinanCabang] = useState(null)

    // Filter pimpinanCabang based on search term
    const filteredPimpinanJabatan =
        pimpinanCabang?.filter(
        (pimpinanCabang) =>
            pimpinanCabang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pimpinanCabang.keterangan?.toLowerCase().includes(searchTerm.toLowerCase()),
        ) || []

    const handleCreate = () => {
        setEditingPimpinanCabang(null)
        setDrawerOpen(true)
    }

    const handleEdit = (pimpinanCabang) => {
        setEditingPimpinanCabang(pimpinanCabang)
        setDrawerOpen(true)
    }

    const handleDelete = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus Pimpinan Cabang ini?")) {
        router.delete(route("pimpinan-cabang.destroy", id), {
            onSuccess: () => {
            toast.success("Pimpinan Cabang berhasil dihapus")
            },
            onError: () => {
            toast.error("Gagal menghapus Pimpinan Cabang")
            },
        })
        }
    }

    const getStatusBadge = (status) => {
        return status === "aktif" ? (
        <Badge variant="default" className="bg-green-100 text-green-800">
            Aktif
        </Badge>
        ) : (
        <Badge variant="secondary" className="bg-red-100 text-red-800">
            Non Aktif
        </Badge>
        )
    }
    // Show flash messages
    const [localFlash, setLocalFlash] = useState(flash)

    useEffect(() => {
    if (localFlash.success) {
        toast.success(localFlash.success)
        setLocalFlash((prev) => ({ ...prev, success: null }))
    }
    if (localFlash.error) {
        toast.error(localFlash.error)
        setLocalFlash((prev) => ({ ...prev, error: null }))
    }
    }, [localFlash])

    return (
        <AuthenticatedLayout

        >
            <Head title="Pimpinan Cabang " />
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <Card className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 md:px-6 m-5 rounded-md">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                            <h1 className="text-2xl font-bold tracking-tight">Pimpinan Cabang</h1>
                            <p className="text-muted-foreground">Kelola Pimpinan Cabang Berita atau Informasi</p>
                            </div>
                            <Button onClick={handleCreate}>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Pimpinan Cabang
                            </Button>
                        </div>

                        {/* Search */}
                        <div className="flex items-center space-x-2">
                            <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Cari Pimpinan Cabang..."
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
                                <TableHead>Alamat</TableHead>
                                <TableHead>Keterangan</TableHead>
                                <TableHead>No. HP</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Dibuat</TableHead>
                                <TableHead>Jumlah Anggota</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredPimpinanJabatan.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-8">
                                    <div className="text-muted-foreground">
                                        {searchTerm ? "Tidak ada Pimpinan Jabatan yang ditemukan" : "Belum ada Pimpinan Jabatan"}
                                    </div>
                                    </TableCell>
                                </TableRow>
                                ) : (
                                filteredPimpinanJabatan.map((pimpinanCabang) => (
                                    <TableRow key={pimpinanCabang.id}>
                                    <TableCell className="font-medium">{pimpinanCabang.name}</TableCell>
                                    <TableCell>{pimpinanCabang.alamat || "-"}</TableCell>
                                    <TableCell>{pimpinanCabang.keterangan || "-"}</TableCell>
                                    <TableCell>{pimpinanCabang.no_hp || "-"}</TableCell>
                                    <TableCell>{getStatusBadge(pimpinanCabang.status)}</TableCell>
                                    <TableCell>{new Date(pimpinanCabang.created_at).toLocaleDateString("id-ID")}</TableCell>
                                    <TableCell> <div className="flex flex-wrap gap-1"><PersonStanding className="w-5 h-5"/> <b>{pimpinanCabang.jumlah_anggota || "-"}</b></div></TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                            <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem onClick={() => handleEdit(pimpinanCabang)}>
                                            <Edit className="mr-2 h-4 w-4" />
                                            Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleDelete(pimpinanCabang.id)} className="text-red-600">
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
                    </Card>
                </div>
            </div>

            {/* Drawer for Create/Edit */}
            <PimpinanCabangDrawer open={drawerOpen} onOpenChange={setDrawerOpen} pimpinanCabang={editingPimpinanCabang} />

        </AuthenticatedLayout>
    )
}
