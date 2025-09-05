import React, { useState } from "react";
import ReactDom from "react-dom/client"

function Counter(){
    let [count,setCount] = useState(0);

    function up(){
        setCount(count+1);
    }

    function down(){
        if(count === 0)
        count+=count;
        else
         setCount(count-1);
    }

    return(
        <div>
        <h1>Count is: {count}</h1>
        <button onClick={up}>UP</button>
        <button onClick={down}>Down</button>
        </div>
    )
}



ReactDom.createRoot(document.getElementById('root')).render(<Counter/>);