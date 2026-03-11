import { useSelector } from "react-redux";

export default function Header() {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#ff5200",
        color: "white",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ margin: 0 }}>Sweggi</h1>

      <p
        style={{
          margin: 0,
          fontSize: "18px",
          background: "white",
          color: "#ff5200",
          padding: "5px 12px",
          borderRadius: "20px",
          fontWeight: "bold"
        }}
      >
        Cart ({cartItems.length})
      </p>
    </div>
  );
}