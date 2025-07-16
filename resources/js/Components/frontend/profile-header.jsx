const EnhancedProfileCard = ({ image, name, title }) => {
  return (
    <div className="relative overflow-hidden bg-white group">
      {/* Top line that appears on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10"></div>

      {/* Image container */}
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full aspect-square object-cover object-center" />
      </div>

      {/* Text content */}
      <div className="p-4 relative">
        <h3 className="font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm">{title}</p>

        {/* Bottom line that's always visible */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></div>
      </div>
    </div>
  )
}

export default EnhancedProfileCard
