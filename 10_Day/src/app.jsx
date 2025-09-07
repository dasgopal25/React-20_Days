import React from "react";
import ReactDom from "react-dom/client";
import GithubRouter from "./router/first";

 function App(){

       return(
              <GithubRouter/>
       )
       
 }

ReactDom.createRoot(document.getElementById('root')).render(<App/>);