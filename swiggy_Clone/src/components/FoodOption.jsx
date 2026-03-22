import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard"

function FoodOption() {
    return (
        <>
            <div className="w-[80%] container mx-auto mt-20">

                <h2 className="text-2xl font-bold mb-6">
                    Order our best food options
                </h2>

                <div className="flex flex-wrap gap-5">
                    {
                        imageGridCards.map((foodData) => (
                            <FoodCard key={foodData.id} foodData={foodData} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default FoodOption