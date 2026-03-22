import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant() {

  const [RestData, setRestData] = useState([]);
  const [navData, setnavData] = useState([]);

  useEffect(() => {

    async function fetchData() {
      try {

        const ProxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5643&lng=88.3693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

        const response = await fetch(ProxyServer + swiggyAPI);
        const data = await response.json();

        const restaurants =
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        const restaurants1 =
        data?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];

        setRestData(restaurants);
        setnavData(restaurants1);

      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();

  }, []);

  if (RestData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
    <div className="max-w-[1300px] mx-auto px-4 py-8">

  <div className="text-2xl font-bold mb-5">
    <h2>What's on your mind?</h2>
  </div>

  <div className="flex gap-5 overflow-x-auto whitespace-nowrap scrollbar py-2 scroll-smooth">

    {
      navData.map((rest) => (
        <img
          key={rest?.id}
          className="min-w-[140px] h-44 object-cover rounded-xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            rest?.imageId
          }
        />
      ))
    }

  </div>

</div>

      <div className="flex justify-center flex-wrap gap-2 mx-auto w-[90%] m-5">

        {
          RestData.map((rest) => (
            <RestCard key={rest?.info?.id} rest={rest} />
          ))
        }

      </div>

    </div>
  );
}