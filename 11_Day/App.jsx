import React, { use, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import DasStore from "./Dasstore";
import Card from "./Card";
import { Provider } from "react-redux";
import Stored from "./Stored"

// function App(){

//     const [reply,setReply] = useState("")
//     let app,app1,app2= null;
//    useEffect(()=>{
//      app = setInterval(()=>{
//         setReply("I AM FINE!");
//         console.log("fff");
       
//     },1000)
//      setTimeout(() => {
//             console.log("ss");
//     clearInterval(app);
// }, 1500);


//    },[])

//    useEffect(()=>{
//      app1 = setInterval(()=>{
//         setReply("What is your name?");
//         console.log("fff");
       
//     },2000)
//     setTimeout(() => {
//             console.log("ss");
//     clearInterval(app1);
// }, 2500);
//    },[])
   
// useEffect(()=>{
//      app2 = setInterval(()=>{
//         setReply("Myself Gopal Das");
//         console.log("fff");
       
//     },3000)
// setTimeout(() => {
//             console.log("ss");
//     clearInterval(app2);
// }, 3500);
// },[])

   
//     return(
//         <div>
//             <h1>Hii,how are you?</h1>
//               <h2>{reply}</h2>
//         </div>
//     )
// }

function App(){

 
    return(
        <Provider store={Stored} >
        <DasStore/>
        <Card/>
        </Provider>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<App/>)