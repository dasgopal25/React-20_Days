// import { useState } from "react";

// export default function Card() {
//     const foods = [
//         { id: 1, name: "Pizza", price: 99 },
//         { id: 2, name: "Burger", price: 79 },
//         { id: 3, name: "Pasta", price: 120 },
//         { id: 4, name: "Sandwich", price: 60 },
//         { id: 5, name: "Momos", price: 50 },
//         { id: 6, name: "Fried Rice", price: 110 },
//         { id: 7, name: "Noodles", price: 100 },
//         { id: 8, name: "Paneer Roll", price: 90 },
//         { id: 9, name: "Dosa", price: 80 },
//         { id: 10, name: "Idli", price: 70 }
//     ];

//     const [cart, setCart] = useState([]);

//     const toggleCart = (id) => {
//         if (cart.includes(id)) {
//             setCart(cart.filter(item => item !== id));
//         } else {
//             setCart([...cart, id]);
//         }
//     };

//     return (
//         <div style={{display:"flex", flexWrap:"wrap", gap:"20px", padding:"20px"}}>
//             {foods.map((food) => (
//                 <div
//                     key={food.id}
//                     style={{
//                         border: "1px solid #ddd",
//                         borderRadius: "10px",
//                         padding: "15px",
//                         width: "150px",
//                         textAlign: "center",
//                         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                         backgroundColor: "#fff"
//                     }}
//                 >
//                     <h3>{food.name}</h3>
//                     <p>Price: ₹{food.price}</p>

//                     <button
//                         onClick={() => toggleCart(food.id)}
//                         style={{
//                             padding: "8px 12px",
//                             backgroundColor: cart.includes(food.id) ? "red" : "green",
//                             color: "white",
//                             border: "none",
//                             borderRadius: "5px",
//                             cursor: "pointer"
//                         }}
//                     >
//                         {cart.includes(food.id) ? "Remove" : "Add"}
//                     </button>

//                 </div>
//             ))}
//         </div>
//     );
// }

import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "./CartSlice";

export default function Card() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);

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

    return (
        <div>
            {foods.map((food) => (
                <div key={food.id}>
                    <h3>{food.name}</h3>
                    <p>₹{food.price}</p>

                    <button onClick={() => dispatch(toggleItem(food.id))}>
                        {cart.includes(food.id) ? "Remove" : "Add"}
                    </button>

                </div>
            ))}
        </div>
    );
}