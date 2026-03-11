import "./Style/Header.css"
import { useSelector } from "react-redux";

export default function Header() {

  const cartItems = useSelector((state) => state.cart.items);
    return(
        <div className="hearderdiv">
        <h1>Fixo Food</h1>
        <h4>Cart({cartItems})</h4>
        </div>
    )
}