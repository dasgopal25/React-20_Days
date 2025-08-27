import React, { useState } from "react";
import ReactDom from "react-dom/client";
import ColorFull from "./first";

function Main(){
 const [count,setCount] = useState(0);

//  function increase(){

//  }
console.log("app.js");

  return(
    <>
    <div>
        <h1>Counter is :{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
    <ColorFull/>
    </>
  )
}


ReactDom.createRoot(document.getElementById('root')).render(<Main/>)