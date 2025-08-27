import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Header from "./components/Header";
import arr from "./utils/arr";





function App() {
let [A,setA]= useState(arr);
 function ArraySort(){
    
    A.sort((a,b)=> a.price - b.price);
    setA([...A]);
}

function filterPrice(){
    const B = arr.filter((value)=> value.price < 499);
    setA(B);
}


    return (
        <>
        <Header/>
          <button style={{marginLeft:"50px"}} onClick={ArraySort} >top to bottom</button>
          <button style={{marginLeft:"50px"}} onClick={filterPrice} >Filter Price </button>
        <div  className="middle" style={{ display: "flex", padding: "10px", flexWrap: "wrap" }}>
            {
                A.map((value, index) => <Card key={index} clothName={value.clothName} ImageLink={value.ImageLink} discount={value.discount} price={value.price}/>)
            }
        </div>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

