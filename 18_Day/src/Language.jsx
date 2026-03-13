import { useState } from 'react'


function LanguageA(props) {
 const [count,setCount] = useState(0);
  return (
  <>
  <h1>{props.value}:{count}</h1>
   <button onClick={()=>setCount(prev => prev + 1)}>Vote</button>
  </>
  )
}

export default LanguageA;