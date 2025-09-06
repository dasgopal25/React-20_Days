import React, { useState } from "react";
import ReactDom from"react-dom/client";
import Incerment from "./increment";
import GlobleContext from "./GlobleContex";


 function App(){
    const [count,setCount]= useState(0)
    return(
        <>
        <GlobleContext.Provider value={{count,setCount}}>
        <h1>Parent counter = {count}</h1>
        <Incerment />
        </GlobleContext.Provider>
        </>
    )
 }

ReactDom.createRoot(document.getElementById('root')).render(<App/>);