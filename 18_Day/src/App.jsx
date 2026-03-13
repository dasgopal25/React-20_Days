import { useState } from 'react'
import LanguageA from './Language';

function App() {

  const [Language,setLanguage] = useState(["TS","JS","JAVA"]);

  function handClick(){
    setLanguage(["C++", ...Language]);
  }

  return (
  <>
   <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
    {
      Language.map((value)=>(
        <LanguageA key={value} value={value}/>
      ))
    }
   </div>

   <br /><br /><br />

   <button onClick={handClick}>Add New Language</button>

  </>
  )
}

export default App;






