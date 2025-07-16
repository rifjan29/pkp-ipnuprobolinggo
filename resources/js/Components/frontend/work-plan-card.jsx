import { ArrowRight } from "lucide-react"

export default function WorkPlanCard({ id, title, division, image, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
          {division}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <a
          href={`/program/${id}`}
          className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-900"
        >
          Baca Selengkapnya
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
