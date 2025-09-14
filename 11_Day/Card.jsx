import { useState } from "react";
import FoodCart from "./Foodcard";

const foodItems = [
    { id: 1, food: 'Pizza', Price: "200" },
    { id: 2, food: 'Burger', Price: "150" },
    { id: 3, food: 'Pasta', Price: "180" },
    { id: 4, food: 'Sandwich', Price: "120" },
    { id: 5, food: 'Fries', Price: "80" },
    { id: 6, food: 'Salad', Price: "100" },
    { id: 7, food: 'Ice Cream', Price: "90" },
    { id: 8, food: 'Soda', Price: "50" },
    { id: 9, food: 'Chicken Wings', Price: "220" },
    { id: 10, food: 'Steak', Price: "300" }
];

export default function Card() {
   
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center'
        }}>
            {foodItems.map((item) => (
                <div key={item.id} style={{
                    border: '1px solid #ccc',
                    padding: '20px',
                    width: '200px',
                    textAlign: 'center',
                    boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
                    borderRadius: '8px'
                }}>
                   <FoodCart  item={item}/>
                </div>
            ))}
        </div>
    );
}
