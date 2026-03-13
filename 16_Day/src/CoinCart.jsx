export default function CoinCart({ coin }) {

    return (
        <div style={{
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>

            <img
                src={coin.image}
                alt={coin.name}
                style={{ width: "60px", height: "60px" }}
            />

            <h3>{coin.name}</h3>

            <p><b>Price:</b> ${coin.current_price}</p>

            <p><b>Rank:</b> #{coin.market_cap_rank}</p>

        </div>
    );
}