"use client"

import { useState } from "react"
import { Head, router, usePage } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Trash2, Edit, Plus, Search, Eye } from "lucide-react"
import BeritaForm from "./Components/BeritaForm"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { toast } from "sonner"

export default function List({ auth, berita, categories, users, tags, filters }) {
    const [searchTerm, setSearchTerm] = useState(filters.search || "")
    const { flash } = usePage().props
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [editingBerita, setEditingBerita] = useState(null)

    const handleSearch = (e) => {
        e.preventDefault()
        router.get(
        route("berita.index"),
        { search: searchTerm },
        {
            preserveState: true,
            replace: true,
        },
        )
    }

    const handleEdit = (item) => {
        setEditingBerita(item)
        setIsEditOpen(true)
    }

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this article?")) {
        router.delete(route("berita.destroy", id), {
            onSuccess: () => {
                toast.success("Kategori berhasil dihapus")
            },
            onError: () => {
                toast.error("Gagal menghapus kategori")
            },
        })
        }
    }

    const handleCreateSuccess = () => {
        setIsCreateOpen(false)
    }

    const handleUpdateSuccess = () => {
        setIsEditOpen(false)
        setEditingBerita(null)
    }

    // Show flash messages
    if (flash.success) {
        toast.success(flash.success)
    }
    if (flash.error) {
        toast.error(flash.error)
    }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita Management</h2>}
    >
        <Head title="Berita Management" />
        <div className="flex flex-1 flex-col m-5">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <Card className="rounded-md">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <h1 className="text-2xl font-bold tracking-tight">News Articles Management</h1>
                            <Drawer open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                                <DrawerTrigger asChild>
                                <Button>
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Article
                                </Button>
                                </DrawerTrigger>
                                <DrawerContent className="max-h-[90vh]">
                                <DrawerHeader>
                                    <DrawerTitle>Create New Article</DrawerTitle>
                                </DrawerHeader>
                                <div className="overflow-y-auto px-4 pb-4">
                                    <BeritaForm
                                    categories={categories}
                                    users={users}
                                    tags={tags}
                                    onSuccess={handleCreateSuccess}
                                    onCancel={() => setIsCreateOpen(false)}
                                    />
                                </div>
                                </DrawerContent>
                            </Drawer>
                            </CardTitle>
                            <CardDescription>Manage your news articles, categories, and tags</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSearch} className="flex items-center space-x-2 mb-4">
                            <Search className="w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="max-w-sm"
                            />
                            <Button type="submit" variant="outline">
                                Search
                            </Button>
                            </form>

                            <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                <TableRow>
                                    <TableHead>Thumbnail</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Author</TableHead>
                                    <TableHead>Tags</TableHead>
                                    <TableHead>Reads</TableHead>
                                    <TableHead>Created</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                                </TableHeader>
                                <TableBody>
                                {berita.data.map((item) => (
                                    <TableRow key={item.id}>
                                    <TableCell>
                                        <img
                                        src={
                                            item.thumbnail ? `/storage/${item.thumbnail}` : "/placeholder.svg?height=100&width=150"
                                        }
                                        alt={item.title}
                                        className="w-16 h-12 object-cover rounded"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium max-w-xs">
                                        <div className="truncate">{item.title}</div>
                                        <div className="text-sm text-muted-foreground truncate">{item.deskripsi}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">{item.category.name}</Badge>
                                    </TableCell>
                                    <TableCell>{item.author.name}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap gap-1">
                                        {item.tag.slice(0, 2).map((tagItem) => (
                                            <Badge key={tagItem.id} variant="outline" className="text-xs">
                                            {tagItem.tag.name}
                                            </Badge>
                                        ))}
                                        {item.tag.length > 2 && (
                                            <Badge variant="outline" className="text-xs">
                                            +{item.tag.length - 2}
                                            </Badge>
                                        )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1">
                                        <Eye className="w-3 h-3" />
                                        {item.count_read.toLocaleString()}
                                        </div>
                                    </TableCell>
                                    <TableCell>{new Date(item.created_at).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                        <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleDelete(item.id)}
                                            className="text-destructive hover:text-destructive"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                        </div>
                                    </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </div>

                            {berita.data.length === 0 && (
                            <div className="text-center py-8 text-muted-foreground">No articles found.</div>
                            )}

                            {/* Pagination */}
                            {berita.links && (
                            <div className="flex justify-center mt-4 space-x-2">
                                {berita.links.map((link, index) => (
                                <Button
                                    key={index}
                                    variant={link.active ? "default" : "outline"}
                                    size="sm"
                                    disabled={!link.url}
                                    onClick={() => link.url && router.get(link.url)}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                                ))}
                            </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
        </div>

        {/* Edit Drawer */}
        <Drawer open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DrawerContent className="max-h-[90vh]">
            <DrawerHeader>
            <DrawerTitle>Edit Article</DrawerTitle>
            </DrawerHeader>
            <div className="overflow-y-auto px-4 pb-4">
            {editingBerita && (
                <BeritaForm
                berita={editingBerita}
                categories={categories}
                users={users}
                tags={tags}
                onSuccess={handleUpdateSuccess}
                onCancel={() => {
                    setIsEditOpen(false)
                    setEditingBerita(null)
                }}
                />
            )}
            </div>
        </DrawerContent>
        </Drawer>
    </AuthenticatedLayout>
  )
}
