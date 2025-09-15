import { useState } from "react";
import { Outlet } from "react-router";
import { addItem,removeItem } from "./Slice2";
import { useDispatch } from "react-redux";

export default function Link_page({count}) {
  const [add, setAdd] = useState(false);
 const dispatch = useDispatch();
 function handClick(){
        if(add){
           
            dispatch(removeItem())
            setAdd(false);
        }else{
            dispatch(addItem())
            setAdd(true);
        }
    }

  return (
    <>
      <h1>Milk</h1>
      <button onClick={handClick}>{add ? "Remove" : "Add"}</button>
      <Outlet />
    </>
  );
}
