import { Outlet } from "react-router"

export default function Service(){
    
    return(
        <>
        <h1>hello service page</h1>
        <Outlet></Outlet>
        </>
        
    )
}