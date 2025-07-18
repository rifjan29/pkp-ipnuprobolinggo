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

export function JabatanDrawer({ open, onOpenChange, jabatan }) {
  const isEditing = !!jabatan

  const { data, setData, post, put, processing, errors, reset } = useForm({
    name: "",
    deskripsi: "",
    status: "ipnu",
  })

  useEffect(() => {
    if (jabatan) {
      setData({
        name: jabatan.name || "",
        golongan: jabatan.golongan || "ipnu",
        deskripsi: jabatan.deskripsi || "",
      })
    } else {
      reset()
    }
  }, [jabatan, open])

  const handleSubmit = (e) => {
    e.preventDefault()

    const options = {
      onSuccess: () => {
        toast.success(isEditing ? "Jabatan berhasil diperbarui" : "Jabatan berhasil ditambahkan")
        onOpenChange(false)
        reset()
      },
      onError: () => {
        toast.error("Terjadi kesalahan, silakan coba lagi")
      },
    }

    if (isEditing) {
      put(route("jabatan.update", jabatan.id), options)
    } else {
      post(route("jabatan.store"), options)
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
          <SheetTitle>{isEditing ? "Edit Jabatan" : "Tambah Jabatan"}</SheetTitle>
          <SheetDescription>
            {isEditing
              ? "Perbarui informasi jabatan di bawah ini."
              : "Tambahkan jabatan baru dengan mengisi form di bawah ini."}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nama Jabatan *</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              placeholder="Masukkan nama jabatan"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="deskripsi">Deskripsi</Label>
            <Textarea
              id="deskripsi"
              value={data.deskripsi}
              onChange={(e) => setData("deskripsi", e.target.value)}
              placeholder="Masukkan deskripsi jabatan (opsional)"
              rows={3}
              className={errors.deskripsi ? "border-red-500" : ""}
            />
            {errors.deskripsi && <p className="text-sm text-red-500">{errors.deskripsi}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status *</Label>
            <Select value={data.status} onValueChange={(value) => setData("status", value)}>
              <SelectTrigger className={errors.status ? "border-red-500" : ""}>
                <SelectValue placeholder="Pilih status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ipnu">IPNU</SelectItem>
                <SelectItem value="ippnu">IPPNU</SelectItem>
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
