import { Outlet } from "react-router";
import RestHeader from "./RestHeader";

export default function Selecter(){

    return(
            <>
            <RestHeader/>
            <Outlet></Outlet>
            </>
    )
}