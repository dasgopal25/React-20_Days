import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";

function Main(){
  const [password ,setPassword] = useState("");
  const [Length,setLength] = useState(5)
  const [NumberCheck,setNumberCheck] = useState(false);
  const [characterCheck,setCharacterCheck] = useState(false);

function passwordgenarator(){
  let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(NumberCheck)
    str+="0123456789";
  if(characterCheck)
    str+="~!@#$%^&*(";
  let pass ="";
  for(let i =0; i< Length;i++){
    pass+= str[Math.floor(Math.random()*str.length)]
    console.log(str.length);
  }

  setPassword(pass);
}

useEffect(()=>{
  passwordgenarator();
},[Length,NumberCheck,characterCheck])

  return(
    <>
    <h1>{password}</h1>
    <div>
      <input type="range" onChange={(e)=>setLength(e.target.value)}  min={5} max={20}/>
      <label htmlFor="">Length({Length})</label>
      <input type="checkbox" checked={NumberCheck} onChange={() => setNumberCheck(() => !NumberCheck)}  />
      <label htmlFor="">Number</label>
      <input type="checkbox"  checked={characterCheck}  onChange={() => setCharacterCheck(() => !characterCheck)}  />
      <label htmlFor="">Character</label>
    </div>
    </>
  )
}

ReactDom.createRoot(document.getElementById('root')).render(<Main/>)