import { Link } from "react-router"

export default function RestCard({rest}) {
  return (
    <Link to={"/city/kolkata/"+rest?.info?.id}>
    <div className="max-w-70 mb-2 transform transition duration-200 hover:scale-95">

      <img
        className="w-70 h-45 object-cover rounded-xl"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + rest?.info?.cloudinaryImageId}
        alt=""
      />

      <div className="w-[95%] mx-auto mt-3">

        {/* Restaurant Name */}
        <div className="font-bold text-xl truncate">
          {rest?.info?.name}
        </div>

        <div className="flex items-center gap-2">

          <svg className="w-4 h-4 fill-[#1b5532]" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 
            1.402 8.168L12 18.896l-7.336 3.87 
            1.402-8.168L.132 9.211l8.2-1.193z"/>
          </svg>

          <span className="text-lg">{rest?.info?.avgRating}</span>

          <span className="font-bold text-lg">
            {rest?.info?.sla?.slaString}
          </span>

        </div>

        {/* Cuisine */}
        <div className="text-gray-500 mt-1 truncate">
          {rest?.info?.cuisines.join(", ")}
        </div>

        {/* Location */}
        <div className="text-gray-500 mt-1 truncate">
          {rest?.info?.areaName}
        </div>

      </div>
    </div>
    </Link>
  )
}