
"use client"

import { JabatanDrawer } from "@/Components/jabatan-drawer"
import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu"
import { Input } from "@/Components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, router, usePage } from "@inertiajs/react"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { Edit, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"

export default function List({ auth, jabatan}){
    const { props } = usePage()
    const user = props.user
    const { flash } = usePage().props
    const [searchTerm, setSearchTerm] = useState("")
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [editingJabatan, setEditingJabatan] = useState(null)

    // Filter jabatan based on search term
    const filteredJabatan =
        jabatan?.filter(
        (jabatan) =>
            jabatan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            jabatan.golongan?.toLowerCase().includes(searchTerm.toLowerCase()),
        ) || []

    const handleCreate = () => {
        setEditingJabatan(null)
        setDrawerOpen(true)
    }

    const handleEdit = (jabatan) => {
        setEditingJabatan(jabatan)
        setDrawerOpen(true)
    }

    const handleDelete = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus jabatan ini?")) {
        router.delete(route("jabatan.destroy", id), {
            onSuccess: () => {
            toast.success("jabatan berhasil dihapus")
            },
            onError: () => {
            toast.error("Gagal menghapus jabatan")
            },
        })
        }
    }

    const getStatusBadge = (status) => {
        return status === "ipnu" ? (
        <Badge variant="default" className="bg-blue-100 text-blue-800">
            IPNU
        </Badge>
        ) : (
        <Badge variant="secondary" className="bg-green-100 text-green-800">
            IPPNU
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
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Jabatan Management</h2>}
        >
            <Head title="Jabatan" />
            <div className="flex flex-1 flex-col m-5">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <Card className="rounded-md">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <h1 className="text-2xl font-bold tracking-tight">Jabatan Management</h1>
                                <Button onClick={handleCreate}>
                                <Plus className="mr-2 h-4 w-4" />
                                Tambah Kategori
                                </Button>
                            </CardTitle>
                            <CardDescription>Manage your jabatan, categories, and tags</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
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
                                    {filteredJabatan.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className="text-center py-8">
                                        <div className="text-muted-foreground">
                                            {searchTerm ? "Tidak ada jabatan yang ditemukan" : "Belum ada jabatan"}
                                        </div>
                                        </TableCell>
                                    </TableRow>
                                    ) : (
                                    filteredJabatan.map((jabatan) => (
                                        <TableRow key={jabatan.id}>
                                        <TableCell className="font-medium">{jabatan.name}</TableCell>
                                        <TableCell>{jabatan.deskripsi || "-"}</TableCell>
                                        <TableCell>{getStatusBadge(jabatan.golongan)}</TableCell>
                                        <TableCell>{new Date(jabatan.created_at).toLocaleDateString("id-ID")}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => handleEdit(jabatan)}>
                                                <Edit className="mr-2 h-4 w-4" />
                                                Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => handleDelete(jabatan.id)} className="text-red-600">
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
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Drawer for Create/Edit */}
            <JabatanDrawer open={drawerOpen} onOpenChange={setDrawerOpen} jabatan={editingJabatan} />
        </AuthenticatedLayout>
    )
}
