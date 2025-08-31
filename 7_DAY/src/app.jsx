import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";

function GithubProfile(){

  return(
    <>
    <Header/>
    <Body/>
    </>
  )
}


ReactDom.createRoot(document.getElementById('root')).render(<GithubProfile/>);
