import { useSelector } from "react-redux";

export default function CheckOut() {
    const Data = useSelector((state) => state.CartSlice.items);


    return (
        <div>
            
            <h1>CheckOut</h1>

            <div className="w-[80%] container mx-auto">

                {Data.map((item) => (
                    <div key={item?.id} className="flex justify-between border-b py-6">


                        <div className="w-[70%]">
                            <p className="font-semibold text-lg text-gray-600">
                                {item?.name}
                            </p>

                            <p className="font-medium">
                                ₹{((item?.defaultPrice || item?.price || 0) / 100)}
                            </p>

                            <div className="text-green-600 text-sm">
                                Quantity({item?.quantity})
                            </div>

                            <p className="line-clamp-3 text-gray-500 text-sm mt-2">
                                {item?.description}
                            </p>
                        </div>

                        {/* 🔹 RIGHT IMAGE */}
                        <div className="relative">
                            <img
                                className="w-40 h-30 object-cover rounded-lg"
                                src={
                                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                                    item?.imageId
                                }
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}