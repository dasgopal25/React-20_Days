import { useState } from "react"
import { useDispatch } from "react-redux";
import { customIncreaser } from "./slice1";

export default function CustomeCounter(){
     const [num,setNum] = useState("");
     const dispatch = useDispatch()
     function handChange(){
        dispatch(customIncreaser(Number(num)))
        setNum("")
     }

    return(
        <>
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
        <button onClick={handChange}>Submit</button>
        </>
    )
}