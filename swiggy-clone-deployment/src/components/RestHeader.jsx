import { useSelector } from "react-redux"
import { Link } from "react-router"

export default function RestHeader() {
    const counter = useSelector(state => state.CartSlice.count);
    
    return (
        <div className="w-full  h-15 flex justify-around font-bold bg-orange-600 mx-auto rounded-b-2xl">
            <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
            <Link to={"/checkOut"}>
                <div className=" text-white text-base font-bold flex gap-10 items-center">
                    <button className="border border-white rounded-2xl p-3">Cart:{`${counter}`}</button>
                </div>
            </Link>
        </div>
    )
}