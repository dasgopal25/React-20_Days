

export default function DineOutCard({ ResData }) {
    const data = ResData?.info?.offerInfoV3?.vendorOffer
    return (
        <div className=" mb-10">
            <a href={ResData?.cta?.link}>
                <div className="relative w-80 shrink-0">


                    <img
                        className="w-full h-48 object-cover rounded-t-2xl"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + ResData?.info?.mediaFiles[0]?.url}
                        alt="restaurant"
                    />

                    <p className="absolute bottom-1 left-1 text-white font-bold z-10">
                        {ResData?.info?.name}
                    </p>

                    <p className="absolute bottom-1 right-1 text-white font-bold z-10">
                        ⭐ {ResData?.info?.rating?.value}
                    </p>
                    <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <div className=" font-serif max-w-sm  rounded-b-2xl text-gray-500 text-sm px-3 pt-2 pb-4 shadow-md shadow-gray-200">

                    <div className="flex justify-between">
                        <p>{ResData?.info?.cuisines?.join(" • ")}</p>
                        <span>{ResData?.info?.costForTwo}</span>
                    </div>

                    <div className="flex justify-between">
                        <p>{ResData?.info?.locationInfo?.formattedAddress}</p>
                        <span>{ResData?.info?.locationInfo?.distanceString}</span>
                    </div>

                    <div className="mt-3 flex justify-between items-center bg-[#1ba672] text-white px-3 py-2 rounded-md text-sm font-medium">
                        <span span className="text-sm font-semibold">
                            {data?.title}
                            <span className="ml-2 text-white">{data?.subtitle}</span>
                        </span>
                        <span className="ml-2 mr-1 text-white">{data?.subtext}</span>
                    </div>

                    <div className="mt-3 bg-green-200 text-[#1ba672] px-3 py-2 rounded-md text-sm">
                        <span className="ml-2 text-lg">{ResData?.info?.customerOffer?.infos[0]?.description}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}