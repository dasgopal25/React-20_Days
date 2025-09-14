import { useSelector } from "react-redux"

export default function DasStore(){
    const count = useSelector((state)=>state.slice2.count)
    return(
        <div style={{display:"flex", justifyContent:"center",alignItems:"center",gap:"20px"}}>
            <h1>DasStore</h1>
            <h2>Card:({count})</h2>
        </div>
    )
}