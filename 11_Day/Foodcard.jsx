import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./Slice2";

export default function FoodCart({item}){
     const [inCart,setCart] = useState(false)
     const dispatch = useDispatch();
    function handClick(){
        if(inCart){
           
            dispatch(removeItem())
            setCart(false);
        }else{
            dispatch(addItem())
            setCart(true);
        }
    }
    return(
        <>
         <h3>{item.food}</h3>
                    <p>Price: ${item.Price}</p>
                    <button onClick={handClick}>{inCart?"Remove":"ADD"}</button>
        </>
    )
}