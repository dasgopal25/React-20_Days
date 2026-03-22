import {gridElements} from "../Utils/GroceryData"
import GroceryCard from "./GroceryCard"

function GroceryOption(){
    return(
        <>
            <div className="w-[80%] container mx-auto mt-20">
                
                <h2 className="text-2xl font-bold mb-6">
                   Shop groceries on Instamart
                </h2>

                <div className="flex gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    {
                        gridElements.map((foodData) => (
                            <GroceryCard key={foodData.id} foodData={foodData}/>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default GroceryOption