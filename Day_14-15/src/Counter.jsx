import {useDispatch, useSelector} from "react-redux"
import { Increase,Decrease,Reset } from "./slice1";

function Counter(){
 
  const count = useSelector((state)=> state.slice1.count)
  //subscribing to the event
  const dispatch = useDispatch();
  


    return(
        <>
           <h1> Counter is {count}</h1> 
           <button onClick={()=>dispatch(Increase())}>Increase</button>
           <button onClick={()=>dispatch(Decrease())}>Decrease</button>
           <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}

export default Counter;