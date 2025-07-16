import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardHeader } from "@/Components/ui/card"
import FrontendLayout from "@/Layouts/FrontendLayout"
import { Head } from "@inertiajs/react"
import { ArrowRight } from "lucide-react"


export default function BlogContent() {
    const posts = [
        {
            id: 1,
            title:
                "Tailwind v4 is here! Learn how to upgrade your current project and explore the new features with Flowbite",
            excerpt:
                "A few days ago the developers from Tailwind officially announced the v4-beta which means that you can now officially start playing around with the new version of Tailwind.",
            author: {
                name: "Zoltán Szőgyényi",
                avatar: "/placeholder.svg?height=32&width=32",
            },
            publishedAt: "6 months ago",
            tags: ["Tailwind CSS", "Flowbite"],
        },
        {
            id: 2,
            title: "Another blog post title here",
            excerpt: "Brief description of the second blog post...",
            author: {
                name: "Author Name",
                avatar: "/placeholder.svg?height=32&width=32",
            },
            publishedAt: "a year ago",
            tags: ["Tailwind CSS", "Flowbite", "Figma"],
        },
    ]

    const recommendedTopics = ["Alpine.js", "Angular", "Figma", "Flowbite", "Laravel", "Next.js", "Tailwind CSS"]

    return (
        <>
            <Head title="Artikel & Berita - PC IPNU & IPPNU Kota Probolinggo" />
            <FrontendLayout>
                <div className="min-h-screen bg-gray-50">
                    <div className="container mx-auto px-4 py-8">
                        {/* Mobile Tags - Only visible on mobile */}
                        <div className="lg:hidden mb-6">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                            <h3 className="text-lg font-semibold text-gray-900">RECOMMENDED TOPICS</h3>
                            </CardHeader>
                            <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {recommendedTopics.map((topic) => (
                                <Badge
                                    key={topic}
                                    variant="secondary"
                                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
                                >
                                    #{topic}
                                </Badge>
                                ))}
                            </div>
                            </CardContent>
                        </Card>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Left Sidebar - Sticky on desktop */}
                            <div className="lg:col-span-3 hidden lg:block">
                                <div className="lg:sticky lg:top-8 space-y-8">
                                    <Card className="shadow-none">
                                        <CardContent>
                                            <h1 className="font-heading text-2xl font-bold text-gray-900 my-4">TEMUKAN ARTIKEL TERBARU</h1>
                                            <p className="font-body text-gray-600 text-sm leading-relaxed">
                                            Blog posts, articles, and tutorials about web development and design.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="shadow-none">
                                        <CardContent>
                                            <h2 className="font-heading text-lg font-bold text-gray-900 my-4">YOUTUBE RESOURCE</h2>
                                            <div className="space-y-3">
                                            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                                                <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                                </div>
                                                <span className="text-gray-700">Flowbite Library</span>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-gray-400" />
                                            </Button>

                                            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                                                <div className="flex items-center gap-3">
                                                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">F</span>
                                                </div>
                                                <span className="text-gray-700">Figma design system</span>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-gray-400" />
                                            </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="lg:col-span-6">
                                <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold font-body text-black">8 posts in total</span>
                                </div>
                                <hr />
                                <div className="space-y-6">
                                    {posts.map((post) => (
                                    <Card key={post.id} className="shadow-none">
                                        <CardHeader className="pb-3">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {post.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                                #{tag}
                                            </Badge>
                                            ))}
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-900 leading-tight">{post.title}</h2>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                            <Avatar className="w-8 h-8">
                                                <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                                                <AvatarFallback>
                                                {post.author.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                                            </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                            <span className="text-sm text-gray-500">Published {post.publishedAt}</span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-blue-600 hover:text-blue-700 p-0 self-start sm:self-auto"
                                            >
                                                Read more <ArrowRight className="w-4 h-4 ml-1" />
                                            </Button>
                                            </div>
                                        </div>
                                        </CardContent>
                                    </Card>
                                    ))}
                                </div>

                                {/* Load more posts area */}
                                <div className="py-8">
                                    <Button variant="outline" className="w-full">
                                    Load More Posts
                                    </Button>
                                </div>
                                </div>
                            </div>

                            {/* Right Sidebar - Sticky on desktop, hidden on mobile */}
                            <div className="hidden lg:block lg:col-span-3">
                                <div className="sticky top-8 space-y-6">
                                {/* Advertisement */}
                                <Card className="border-0 shadow-sm overflow-hidden">
                                    <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-6 text-white relative">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                                        <div className="w-8 h-8 bg-orange-500 rounded"></div>
                                        </div>
                                        <div className="flex-1">
                                        <p className="text-sm leading-relaxed">
                                            Build your website for just $3.88/mth. More value and performance with Namecheap.
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </Card>

                                {/* Recommended Topics */}
                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                    <h3 className="text-lg font-semibold text-gray-900">RECOMMENDED TOPICS</h3>
                                    </CardHeader>
                                    <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {recommendedTopics.map((topic) => (
                                        <Badge
                                            key={topic}
                                            variant="secondary"
                                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
                                        >
                                            #{topic}
                                        </Badge>
                                        ))}
                                    </div>
                                    </CardContent>
                                </Card>

                                {/* Additional sidebar content */}
                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                    <h3 className="text-lg font-semibold text-gray-900">RECENT POSTS</h3>
                                    </CardHeader>
                                    <CardContent>
                                    <div className="space-y-4">
                                        {posts.slice(0, 3).map((post) => (
                                        <div
                                            key={`recent-${post.id}`}
                                            className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0"
                                        >
                                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">{post.title}</h4>
                                            <p className="text-xs text-gray-500">{post.publishedAt}</p>
                                        </div>
                                        ))}
                                    </div>
                                    </CardContent>
                                </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FrontendLayout>
        </>
    )
}
