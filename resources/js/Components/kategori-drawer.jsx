"use client"

import { useEffect } from "react"
import { useForm } from "@inertiajs/react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/Components/ui/sheet"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Textarea } from "@/Components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export function KategoriDrawer({ open, onOpenChange, kategori }) {
  const isEditing = !!kategori

  const { data, setData, post, put, processing, errors, reset } = useForm({
    name: "",
    keterangan: "",
    status: "berita",
  })

  useEffect(() => {
    if (kategori) {
      setData({
        name: kategori.name || "",
        keterangan: kategori.keterangan || "",
        status: kategori.status || "berita",
      })
    } else {
      reset()
    }
  }, [kategori, open])

  const handleSubmit = (e) => {
    e.preventDefault()

    const options = {
      onSuccess: () => {
        toast.success(isEditing ? "Kategori berhasil diperbarui" : "Kategori berhasil ditambahkan")
        onOpenChange(false)
        reset()
      },
      onError: () => {
        toast.error("Terjadi kesalahan, silakan coba lagi")
      },
    }

    if (isEditing) {
      put(route("kategori.update", kategori.id), options)
    } else {
      post(route("kategori.store"), options)
    }
  }

  const handleOpenChange = (newOpen) => {
    if (!processing) {
      onOpenChange(newOpen)
      if (!newOpen) {
        reset()
      }
    }
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{isEditing ? "Edit Kategori" : "Tambah Kategori"}</SheetTitle>
          <SheetDescription>
            {isEditing
              ? "Perbarui informasi kategori di bawah ini."
              : "Tambahkan kategori baru dengan mengisi form di bawah ini."}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nama Kategori *</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              placeholder="Masukkan nama kategori"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="keterangan">Keterangan</Label>
            <Textarea
              id="keterangan"
              value={data.keterangan}
              onChange={(e) => setData("keterangan", e.target.value)}
              placeholder="Masukkan keterangan kategori (opsional)"
              rows={3}
              className={errors.keterangan ? "border-red-500" : ""}
            />
            {errors.keterangan && <p className="text-sm text-red-500">{errors.keterangan}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status *</Label>
            <Select value={data.status} onValueChange={(value) => setData("status", value)}>
              <SelectTrigger className={errors.status ? "border-red-500" : ""}>
                <SelectValue placeholder="Pilih status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="berita">Berita</SelectItem>
                <SelectItem value="artikel">Artikel</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && <p className="text-sm text-red-500">{errors.status}</p>}
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={processing}
              className="flex-1"
            >
              Batal
            </Button>
            <Button type="submit" disabled={processing} className="flex-1">
              {processing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isEditing ? "Perbarui" : "Simpan"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
