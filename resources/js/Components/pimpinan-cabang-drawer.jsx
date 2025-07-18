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

export function PimpinanCabangDrawer({ open, onOpenChange, pimpinanCabang }) {
  const isEditing = !!pimpinanCabang

  const { data, setData, post, put, processing, errors, reset } = useForm({
    name: "",
    alamat: "",
    keterangan: "",
    status: "aktif",
    status_pimpinan: "",
    no_hp: "",
    jumlah_anggota: "",
  })

  useEffect(() => {
    if (pimpinanCabang) {
      setData({
        name: pimpinanCabang.name || "",
        alamat: pimpinanCabang.alamat || "",
        keterangan: pimpinanCabang.keterangan || "",
        status: pimpinanCabang.status || "akif",
        status_pimpinan: pimpinanCabang.status_pimpinan || "",
        no_hp: pimpinanCabang.no_hp || "",
        jumlah_anggota: pimpinanCabang.jumlah_anggota || "",
      })
    } else {
      reset()
    }
  }, [pimpinanCabang, open])

  const handleSubmit = (e) => {
    e.preventDefault()

    const options = {
      onSuccess: () => {
        toast.success(isEditing ? "Pimpinan Cabang berhasil diperbarui" : "Pimpinan Cabang berhasil ditambahkan")
        onOpenChange(false)
        reset()
      },
      onError: () => {
        toast.error("Terjadi kesalahan, silakan coba lagi")
      },
    }

    if (isEditing) {
      put(route("pimpinan-cabang.update", pimpinanCabang.id), options)
    } else {
      post(route("pimpinan-cabang.store"), options)
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
          <SheetTitle>{isEditing ? "Edit Pimpinan Cabang" : "Tambah Pimpinan Cabang"}</SheetTitle>
          <SheetDescription>
            {isEditing
              ? "Perbarui informasi Pimpinan Cabang di bawah ini."
              : "Tambahkan Pimpinan Cabang baru dengan mengisi form di bawah ini."}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div className="space-y-2">
                <Label htmlFor="name">Nama Pimpinan Cabang *</Label>
                <Input
                id="name"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                placeholder="Masukkan nama pimpinan cabang"
                className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="alamat">Alamat</Label>
                <Textarea
                id="alamat"
                value={data.alamat}
                onChange={(e) => setData("alamat", e.target.value)}
                placeholder="Masukkan alamat kategori (opsional)"
                rows={3}
                className={errors.alamat ? "border-red-500" : ""}
                />
                {errors.alamat && <p className="text-sm text-red-500">{errors.alamat}</p>}
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
                <Label htmlFor="no_hp">No Hp </Label>
                <Input
                id="no_hp"
                value={data.no_hp}
                onChange={(e) => setData("no_hp", e.target.value)}
                placeholder="Masukkan No HP"
                className={errors.no_hp ? "border-red-500" : ""}
                />
                {errors.no_hp && <p className="text-sm text-red-500">{errors.no_hp}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="jumlah_anggota">Jumlah Anggota </Label>
                <Input
                id="jumlah_anggota"
                value={data.jumlah_anggota}
                onChange={(e) => setData("jumlah_anggota", e.target.value)}
                placeholder="Masukkan No HP"
                className={errors.jumlah_anggota ? "border-red-500" : ""}
                />
                {errors.jumlah_anggota && <p className="text-sm text-red-500">{errors.jumlah_anggota}</p>}
            </div>


          <div className="space-y-2">
            <Label htmlFor="status">Status *</Label>
            <Select value={data.status} onValueChange={(value) => setData("status", value)}>
              <SelectTrigger className={errors.status ? "border-red-500" : ""}>
                <SelectValue placeholder="Pilih status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aktif">Aktif</SelectItem>
                <SelectItem value="infonon-aktifrmasi">Non Aktif</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && <p className="text-sm text-red-500">{errors.status}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="status_pimpinan">Status Pimpinan *</Label>
            <Select value={data.status_pimpinan} onValueChange={(value) => setData("status_pimpinan", value)}>
              <SelectTrigger className={errors.status_pimpinan ? "border-red-500" : ""}>
                <SelectValue placeholder="Pilih Status Pimpinan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pac">PAC</SelectItem>
                <SelectItem value="pkpt">PKPT</SelectItem>
                <SelectItem value="komisariat">Komisariat</SelectItem>
                <SelectItem value="ranting">Ranting</SelectItem>
              </SelectContent>
            </Select>
            {errors.status_pimpinan && <p className="text-sm text-red-500">{errors.status_pimpinan}</p>}
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
