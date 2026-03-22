import { useState } from "react";
import {AddItems,IncrementItems,DecrementItems} from './Store/Slice'
import { useDispatch, useSelector } from "react-redux";

export default function ItemsCard({ itemsInfo }) {
 
 const dispatch = useDispatch();
  const items = useSelector(state=>state.CartSlice.items)

  const element = items.find(item=>item.id === itemsInfo.id)

  const count = element?element.quantity:0;


 function handlAdd(){
  dispatch(AddItems(itemsInfo))
 }
 function handlIncrement(){
  dispatch(IncrementItems(itemsInfo))
 }
 function handlDecrement(){
  dispatch(DecrementItems(itemsInfo))
 }

  return (
    <div className="flex justify-between border-b py-6">

      {/* 🔹 LEFT CONTENT */}
      <div className="w-[70%]">
        <p className="font-semibold text-lg text-gray-600">
          {itemsInfo?.name}
        </p>

        <p className="font-medium">
          ₹{((itemsInfo?.defaultPrice || itemsInfo?.price || 0) / 100)}
        </p>

        <div className="text-green-600 text-sm">
          ⭐ {itemsInfo?.ratings?.aggregatedRating?.rating}
          ({itemsInfo?.ratings?.aggregatedRating?.ratingCountV2})
        </div>

        <p className="line-clamp-3 text-gray-500 text-sm mt-2">
          {itemsInfo?.description}
        </p>
      </div>

     
      <div className="relative">
        <img
          className="w-40 h-30 object-cover rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            itemsInfo?.imageId
          }
          alt=""
        />

        {
          count===0?(<button className="w-30 h-9 absolute bottom-5 left-1/2 -translate-x-1/2 bg-white border px-6 py-1 rounded-lg shadow-md text-green-600 font-bold hover:bg-gray-100" onClick={()=>handlAdd()}>
          ADD
        </button>):(
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border px-3 py-1 rounded-lg shadow-md text-green-600 font-bold hover:bg-gray-100 flex gap-3 w-30 h-9 justify-around">
            <button className="text-xl" onClick={()=>handlDecrement()}>-</button>
            <span>{count}</span>
            <button  className="text-xl" onClick={()=>handlIncrement()}>+</button>
          </div>
        )
        }
        

        {/* 🔹 Customisable text */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Customisable
        </p>
      </div>
    </div>
  );
}