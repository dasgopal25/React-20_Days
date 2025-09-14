import { useDispatch,useSelector } from "react-redux";
import { Incerment,Decerment,Reset } from "./Slice1";


export default function Counting(){
    const count = useSelector((state)=>state.slice1.count);
    const dispatch = useDispatch()
    return(
        <>
        <h1>Couting is:{count}</h1>
        <button onClick={()=>dispatch(Incerment())}>Increment</button>
        <button onClick={()=>dispatch(Decerment())}>Decrement</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}