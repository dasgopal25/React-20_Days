import React, { useRef, useState } from "react";
import ReactDom from "react-dom/client";
// Usememo :- 0 to 37 min  lec no: 10  
function StopWatch(){
    const [time,setTime] = useState(0)
    const AddressRef = useRef(null);

function Start(){

    AddressRef.current= setInterval(()=>{
        setTime((prev)=>prev+1);
    },1000)
}

function Stop(){
 clearInterval(AddressRef.current);
 AddressRef.current = null;
}
function Reset(){
     clearInterval(AddressRef.current);
     AddressRef.current = null;
    setTime(0);
}
    return(
        <>
        <h1>Stopwatch is : {time}</h1>
        <button onClick={Start}>Start</button>
        <br />
        <br />
        <button onClick={Stop}>Stop</button>
        <br />
        <br />
        <button onClick={Reset}>Reset</button>
        </>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<StopWatch/>)