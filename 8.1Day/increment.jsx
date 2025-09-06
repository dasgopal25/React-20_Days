import { useContext } from "react"
import GlobleContext from "./GlobleContex"


export default function Incerment(){
    const data = useContext(GlobleContext);
    console.log(data);
    
    return (
       <>
        <h1>child Counter:{data.count}</h1>
        <button onClick={()=>data.setCount(data.count+1)}>Incerment</button>
       </>

    )
}