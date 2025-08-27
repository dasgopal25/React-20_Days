function Card(props) {
    return (
        <div  style={{
            backgroundColor:"#C63E21",
            color:"white",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "12px",
            margin: "10px",
            marginLeft:"20px",
            textAlign: "center",
            width: "200px",
            boxShadow: "0 4px 8px #C63E21",
        }}>
            
            <img src={props.ImageLink} width="200px" height="200px" />

            <div style={{ textAlign: "center" }}>
                <h2>{props.clothName}</h2>
                <h2>{props.discount}</h2>
                <h2>${props.price}</h2>
                
                <button style={{
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "6px",
                    background: "#007bff",
                    color: "white",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(25, 245, 76, 1)"
                }}>Shop Now</button>
            </div>
        </div>
    )
}

export default Card;