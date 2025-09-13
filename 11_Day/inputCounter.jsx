import { useState } from "react";
import { useDispatch } from "react-redux";
import { Incerment1,Incerment } from "./Slice1";


export default function InputCounter(){
    const [number,setNumber] = useState("");
    const dispatch = useDispatch();
    function submitFun(){
        dispatch(Incerment(Number(number)));
        setNumber(""); 
    }
    return(
    <>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    <button onClick={submitFun}>Submit</button>
    </>
    )
}