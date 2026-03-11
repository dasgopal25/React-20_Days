import { useDispatch } from "react-redux";
import "./Style/Card.css"
import { useState } from "react";
import { addItem,removeItem } from "./CreateSlice";

export default function Card(){
    const dispatch = useDispatch();

    const foods = [
        { id: 1, name: "Pizza", price: 99 },
        { id: 2, name: "Burger", price: 79 },
        { id: 3, name: "Pasta", price: 120 },
        { id: 4, name: "Sandwich", price: 60 },
        { id: 5, name: "Momos", price: 50 },
        { id: 6, name: "Fried Rice", price: 110 },
        { id: 7, name: "Noodles", price: 100 },
        { id: 8, name: "Paneer Roll", price: 90 },
        { id: 9, name: "Dosa", price: 80 },
        { id: 10, name: "Idli", price: 70 }
    ];

    const [cart,setCart] = useState([]);

    function toggleCart(id){
        if(cart.includes(id)){
            setCart(cart.filter(item => item !== id))
            dispatch(removeItem())
        }else{
            setCart([...cart,id])
            dispatch(addItem())
        }
    }

    return(
        <div className="Carddiv">
            <div className="inner">

                {foods.map((food) => (
                    <div className="card" key={food.id}>
                        <h3>{food.name}</h3>
                        <p>₹{food.price}</p>

                        <button onClick={()=>toggleCart(food.id)}>
                            {cart.includes(food.id) ? "Remove" : "Add"}
                        </button>

                    </div>
                ))}

            </div>
        </div>
    )
}

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5