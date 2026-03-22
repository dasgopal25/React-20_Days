import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Recommadation from "./Recommadation";
import Shimmer2 from "./Shimmer2";
import { Link } from "react-router";

export default function RestaurantMenu() {
  const [selected, setSelected] = useState(null);
  const { id } = useParams();

  const [RestMenu, setRestMenu] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ProxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5643&lng=88.3693&restaurantId=${id}`;

      const response = await fetch(ProxyServer + swiggyAPI);
      const data = await response.json();

      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const filterData = tempData.filter(
        (items) => "itemCards" in items?.card?.card
      );

      setRestMenu(filterData);
    }

    fetchData();
  }, [id]); 

  if (RestMenu.length === 0) {
    return <Shimmer2 />;
  }

  return (
    <div className="relative">
      <div className=" container w-[90%] mx-auto  flex justify-between align-center">
        <div>
            <button
          className={`text-lg p-1 m-2 rounded-2xl w-30 border ${
            selected === "veg" ? "bg-green-600 text-white" : "bg-gray-300"
          }`}
          onClick={() =>
            setSelected(selected === "veg" ? null : "veg")
          }
        >
          Veg
        </button>

        <button
          className={`text-lg p-1 m-2 rounded-2xl w-30 border ${
            selected === "nonveg" ? "bg-red-500 text-white" : "bg-gray-300"
          }`}
          onClick={() =>
            setSelected(selected === "nonveg" ? null : "nonveg")
          }
        >
          Non-Veg
        </button>
        </div>
         
         
        <div className="w-[50%] text-lg p-1 m-2 rounded-2xl text-center text-gray-500 border bg-white">
          <Link to={`/city/kolkata/${id}/search`}>
          <button className="w-full cursor-pointer  ">Search for dishes</button>
          </Link>
        </div>
        

      </div>

     
      <div className="w-[80%] mx-auto overflow-x-hidden top-10 absolute left-30">
        {RestMenu?.map((value) => (
          <Recommadation
            key={value?.card?.card?.title}
            value={value?.card?.card}
            foodSelected={selected}
          />
        ))}
      </div>
    </div>
  );
}