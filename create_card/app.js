import React from "react";
import ReactDom from "react-dom/client"


function Card() {
    return (
        <>

            <div className="card">
                <div className="content">
                    <h4 className="text">T-shirt</h4>
                    <h2 className="text">20-40% OFF</h2>
                    <h3 className="text">Shop Now</h3>
                </div>
            </div>
        </>
    )
}



function App() {
    return (
        <div className="all">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />)