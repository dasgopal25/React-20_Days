import React, { useState,useEffect } from "react";

function ColorFull(){

      const [color,setColor]= useState("black")
            console.log("first ColorFull");
            
      useEffect(()=>{
        console.log("UseEffect")
         document.querySelector("body").style.backgroundColor = color;
      },[color]);

        return(
            <>
            <h1>Background Color Changer</h1>
            <div>
                <button style={{backgroundColor:"red",color:"white"}} onClick={()=>setColor("red")}>Red</button>
                <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>setColor("blue")}>Blue</button>
                <button style={{backgroundColor:"yellow",color:"white"}} onClick={()=>setColor("yellow")}>Yellow</button>
                <button style={{backgroundColor:"green",color:"white"}} onClick={()=>setColor("green")}>Green</button>
                <button style={{backgroundColor:"pink",color:"white"}} onClick={()=>setColor("pink")}>Pink</button>
            </div>
            </>
        )
};

export default React.memo(ColorFull);