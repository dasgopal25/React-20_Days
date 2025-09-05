 import React from "react";
import ReactDom from "react-dom/client"
import {BrowserRouter,Routes,Route,Link, Outlet} from"react-router";
import Contact from "./contact";
import Service from "./service";
import Hi from "./hi";
import Hello from "./hello";

function Home(){
    return(
        <h1>this is a Home page</h1>
    )
}

 function App(){
    return (
        <>
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/service">Service</Link>
        </nav>
        <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/contact" element={<Contact/>}> </Route>
        <Route path="/service" element={<Service/>} > 
        <Route index element={<Hi/>}></Route>
        <Route path="hello" element={<Hello/>}></Route>
        </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
 }

ReactDom.createRoot(document.getElementById('root')).render(<App/>)