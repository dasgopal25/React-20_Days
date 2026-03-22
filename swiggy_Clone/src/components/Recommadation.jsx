import { useState } from "react";
import ItemsCard from "./ItemsCard";

export default function Recommadation({ value, foodSelected }) {
  const [isOpen, setIsOpen] = useState(true);


  if ("categories" in value) {
    return (
      <div className="w-full py-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-xl font-bold">{value?.title}</p>
          <span>{isOpen ? "⬆" : "⬇"}</span>
        </div>

        {isOpen && (
          <div className="ml-4">
            {value?.categories.map((items) => (
              <Recommadation key={items?.title} value={items} foodSelected={foodSelected} />
            ))}
          </div>
        )}
      </div>
    );
  }


  let filteredItems = value?.itemCards;

  if (foodSelected === "veg") {
    filteredItems = value?.itemCards?.filter(
      (food) => food?.card?.info?.isVeg === 1
    );
  } else if (foodSelected === "nonveg") {
    filteredItems = value?.itemCards?.filter(
      (food) => !food?.card?.info?.isVeg
    );
  }

  return (
    <div className="w-full py-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-2xl font-bold">{value?.title}</p>
        <span>{isOpen ? "⬆" : "⬇"}</span>
      </div>

      {isOpen && (
        <div>
          {filteredItems?.map((items) => (
            <ItemsCard
              key={items?.card?.info?.id}
              itemsInfo={items?.card?.info}
            />
          ))}
        </div>
      )}

      <div className="h-3 bg-gray-200 mb-2"></div>
    </div>
  );
}