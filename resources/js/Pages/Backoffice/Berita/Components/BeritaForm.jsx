"use client"
import { useState, useEffect } from "react"
import { useForm } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Upload, X, Check, ChevronsUpDown, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css" // Import Quill styles

export default function BeritaForm({ berita, categories, users, tags, onSuccess, onCancel }) {
    const [selectedTags, setSelectedTags] = useState(
        berita ? berita.tag.map((t) => ({ id: t.tag_id, name: t.tag.name })) : [],
    )
    const [thumbnailPreview, setThumbnailPreview] = useState(berita?.thumbnail ? `/storage/${berita.thumbnail}` : null)
    const [tagSearchOpen, setTagSearchOpen] = useState(false)
    const [tagSearchValue, setTagSearchValue] = useState("")
    const [availableTags, setAvailableTags] = useState(tags)

    const { data, setData, post, processing, errors, reset } = useForm({
        title: berita?.title || "",
        deskripsi: berita?.deskripsi || "",
        content: berita?.content || "",
        category_id: berita?.category_id?.toString() || "",
        author_id: berita?.author_id?.toString() || "",
        thumbnail: null,
        tag_ids: berita ? berita.tag.map((t) => t.tag_id) : [],
        new_tags: [],
    })

    useEffect(() => {
        // Update form data when selectedTags changes
        const existingTagIds = selectedTags.filter((tag) => typeof tag.id === "number").map((tag) => tag.id)
        const newTags = selectedTags.filter((tag) => typeof tag.id === "string" && tag.id.startsWith("new_"))

        setData((prev) => ({
        ...prev,
        tag_ids: existingTagIds,
        new_tags: newTags.map((tag) => tag.name),
        }))
    }, [selectedTags])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("title", data.title)
        formData.append("deskripsi", data.deskripsi)
        formData.append("content", data.content)
        formData.append("category_id", data.category_id)
        formData.append("author_id", data.author_id)

        if (data.thumbnail) {
        formData.append("thumbnail", data.thumbnail)
        }

        // Handle tags properly
        selectedTags.forEach((tag, index) => {
        if (typeof tag.id === "number") {
            // Existing tag
            formData.append(`tag_ids[${index}]`, tag.id.toString())
        } else if (typeof tag.id === "string" && tag.id.startsWith("new_")) {
            // New tag - send as string with new_ prefix
            formData.append(`tag_ids[${index}]`, tag.id)
        }
        })

        if (berita) {
        formData.append("_method", "PUT")
        post(route("berita-update.post", berita.id), {
            data: formData,
            forceFormData: true,
            onSuccess: () => {
            onSuccess()
            reset()
            },
        })
        } else {
        post(route("berita.store"), {
            data: formData,
            forceFormData: true,
            onSuccess: () => {
            onSuccess()
            reset()
            },
        })
        }
    }

    const handleThumbnailChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
        setData("thumbnail", file)
        const reader = new FileReader()
        reader.onload = (e) => {
            setThumbnailPreview(e.target?.result)
        }
        reader.readAsDataURL(file)
        }
    }

    const addTag = (tagName) => {
        if (!selectedTags.some((tag) => tag.name === tagName)) {
        const existingTag = availableTags.find((tag) => tag.name === tagName)
        if (existingTag) {
            // Add existing tag
            setSelectedTags((prev) => [...prev, { id: existingTag.id, name: tagName }])
        } else {
            // Add new tag
            const tempId = `new_${Date.now()}`
            const newTag = { id: tempId, name: tagName }
            setSelectedTags((prev) => [...prev, newTag])
            // Add to available tags for display
            setAvailableTags((prev) => [...prev, newTag])
        }
        }
        setTagSearchValue("")
        setTagSearchOpen(false)
    }

    const removeTag = (tagToRemove) => {
        setSelectedTags((prev) => prev.filter((tag) => tag.name !== tagToRemove.name))
    }

    const removeThumbnail = () => {
        setData("thumbnail", null)
        setThumbnailPreview(null)
    }

    const filteredTags = availableTags.filter(
        (tag) =>
        tag.name.toLowerCase().includes(tagSearchValue.toLowerCase()) &&
        !selectedTags.some((selectedTag) => selectedTag.name === tag.name),
    )

    const canAddNewTag =
        tagSearchValue.trim() &&
        !availableTags.some((tag) => tag.name.toLowerCase() === tagSearchValue.toLowerCase()) &&
        !selectedTags.some((tag) => tag.name === tagSearchValue.trim())

      // Quill modules and formats
    const modules = {
        toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link", "image"],
        ["clean"],
        ],
    }

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
        "background",
        "align",
    ]
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
            id="title"
            value={data.title}
            onChange={(e) => setData("title", e.target.value)}
            placeholder="Enter article title"
            className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
        </div>

        <div className="space-y-2">
            <Label htmlFor="thumbnail">Thumbnail</Label>
            <div className="space-y-2">
            {thumbnailPreview && (
                <Card className="relative w-fit">
                <CardContent className="p-2">
                    <img
                    src={thumbnailPreview || "/placeholder.svg"}
                    alt="Thumbnail preview"
                    className="w-32 h-24 object-cover rounded"
                    />
                    <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                    onClick={removeThumbnail}
                    >
                    <X className="h-3 w-3" />
                    </Button>
                </CardContent>
                </Card>
            )}
            <div className="flex items-center space-x-2">
                <Input id="thumbnail" type="file" accept="image/*" onChange={handleThumbnailChange} className="hidden" />
                <Button type="button" variant="outline" onClick={() => document.getElementById("thumbnail")?.click()}>
                <Upload className="w-4 h-4 mr-2" />
                {thumbnailPreview ? "Change Image" : "Upload Image"}
                </Button>
            </div>
            </div>
            {errors.thumbnail && <p className="text-sm text-red-500">{errors.thumbnail}</p>}
        </div>

        <div className="space-y-2">
            <Label htmlFor="deskripsi">Description *</Label>
            <Textarea
            id="deskripsi"
            value={data.deskripsi}
            onChange={(e) => setData("deskripsi", e.target.value)}
            placeholder="Enter article description"
            rows={3}
            className={errors.deskripsi ? "border-red-500" : ""}
            />
            {errors.deskripsi && <p className="text-sm text-red-500">{errors.deskripsi}</p>}
        </div>

        <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            <ReactQuill
                theme="snow"
                value={data.content}
                onChange={(value) => setData("content", value)}
                modules={modules}
                formats={formats}
                className={errors.content ? "border border-red-500 rounded" : ""}
            />
            {errors.content && <p className="text-sm text-red-500">{errors.content}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select value={data.category_id} onValueChange={(value) => setData("category_id", value)}>
                <SelectTrigger className={errors.category_id ? "border-red-500" : ""}>
                <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id.toString()}>
                    {category.name}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
            {errors.category_id && <p className="text-sm text-red-500">{errors.category_id}</p>}
            </div>

            <div className="space-y-2">
            <Label htmlFor="author">Author *</Label>
            <Select value={data.author_id} onValueChange={(value) => setData("author_id", value)}>
                <SelectTrigger className={errors.author_id ? "border-red-500" : ""}>
                <SelectValue placeholder="Select author" />
                </SelectTrigger>
                <SelectContent>
                {users.map((user) => (
                    <SelectItem key={user.id} value={user.id.toString()}>
                    {user.name}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
            {errors.author_id && <p className="text-sm text-red-500">{errors.author_id}</p>}
            </div>
        </div>

        <div className="space-y-2">
            <Label>Tags</Label>
            <div className="space-y-3">
            {/* Selected Tags Display */}
            {selectedTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                    <Badge key={`${tag.id}-${tag.name}`} variant="default" className="flex items-center gap-1">
                    {tag.name}
                    <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:bg-primary-foreground/20 rounded-full p-0.5"
                    >
                        <X className="h-3 w-3" />
                    </button>
                    </Badge>
                ))}
                </div>
            )}

            {/* Tag Selector */}
            <Popover open={tagSearchOpen} onOpenChange={setTagSearchOpen}>
                <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={tagSearchOpen}
                    className="w-full justify-between bg-transparent"
                >
                    Select tags...
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Search tags..." value={tagSearchValue} onValueChange={setTagSearchValue} />
                    <CommandList>
                    <CommandEmpty>
                        {canAddNewTag ? (
                        <div className="p-2">
                            <Button
                            type="button"
                            variant="ghost"
                            className="w-full justify-start"
                            onClick={() => addTag(tagSearchValue.trim())}
                            >
                            <Plus className="mr-2 h-4 w-4" />
                            Add "{tagSearchValue.trim()}"
                            </Button>
                        </div>
                        ) : (
                        "No tags found."
                        )}
                    </CommandEmpty>
                    <CommandGroup>
                        {filteredTags.map((tag) => (
                        <CommandItem key={tag.id} value={tag.name} onSelect={() => addTag(tag.name)}>
                            <Check
                            className={cn(
                                "mr-2 h-4 w-4",
                                selectedTags.some((selectedTag) => selectedTag.name === tag.name)
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                            />
                            {tag.name}
                        </CommandItem>
                        ))}
                        {canAddNewTag && filteredTags.length > 0 && (
                        <CommandItem value={tagSearchValue} onSelect={() => addTag(tagSearchValue.trim())}>
                            <Plus className="mr-2 h-4 w-4" />
                            Add "{tagSearchValue.trim()}"
                        </CommandItem>
                        )}
                    </CommandGroup>
                    </CommandList>
                </Command>
                </PopoverContent>
            </Popover>
            </div>
            {errors.tag_ids && <p className="text-sm text-red-500">{errors.tag_ids}</p>}
        </div>

        <div className="flex gap-2 pt-4">
            <Button
            type="submit"
            disabled={processing || !data.title || !data.category_id || !data.author_id}
            className="flex-1"
            >
            {processing ? "Saving..." : berita ? "Update Article" : "Create Article"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
            Cancel
            </Button>
        </div>
        </form>
    )
}
