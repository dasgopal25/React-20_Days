import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function SearchFood() {
  const [food, setFood] = useState("");
  const { id } = useParams();

  const [RestMenu, setRestMenu] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setFood(value);
    onSearch(value);
  }

  useEffect(() => {
    async function fetchData() {
      const ProxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5643&lng=88.3693&restaurantId=${id}`;

      const response = await fetch(ProxyServer + swiggyAPI);
      const data = await response.json();

      const tempData =
        data?.data?.cards[5]?.groupe; dCard?.cardGroupMap?.REGULAR?.cards;

      const filterData = tempData.filter(
        (items) => "itemCards" in items?.card?.card
      );

      setRestMenu(filterData);
    }

    fetchData();
  }, [food]);

  return (
    <div className="m-20 container mx-auto w-[80%] ">
      <input
        type="text"
        className="bg-gray-200 cursor-pointer w-full p-4 rounded-2xl border outline-none"
        placeholder="Search food..."
        value={food}
        onChange={handleChange}
      />

      <div className=" container mx-auto max-w-[95%] h-200 bg-yellow-100 mt-5">
        <div className="container mx-auto w-full " >No found data</div>
      </div>

    </div>
  );
}