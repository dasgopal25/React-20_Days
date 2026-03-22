import { dineoutRestaurants } from "../Utils/DineOut";
import DineOutCard from "./DineOutCard";

export default function DineOutOption() {
  return (
    <div className="w-[80%] container mx-auto mt-20">
      <p className="text-2xl font-bold mb-6">
        Discover best restaurants on Dineout
      </p>

      <div className="flex gap-5 overflow-x-auto">
        {
          dineoutRestaurants.map((ResData) => (
            <DineOutCard key={ResData?.info?.id} ResData={ResData} />
          ))
        }
      </div>
    </div>
  )
}