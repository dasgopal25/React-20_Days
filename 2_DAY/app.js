import React from "react";
import ReactDom from "react-dom/client";


const name = "Gopal das";
const obj = {
    age:20,
    gender:"Male"
};

const newelement = (
    <>
    <h1>USER INFORMATION</h1>
    <h2>Name:{name}</h2>
    <h3>Age:{obj.age}</h3>
    <h4>Gender:{obj.gender}</h4>
    </>
)

const React_render = ReactDom.createRoot(document.getElementById('root'));
React_render.render(newelement);

