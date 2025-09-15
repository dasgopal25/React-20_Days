import { BrowserRouter, Link, Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import Link_page from "./link_page";

export default function DasStore() {
  const count = useSelector((state) => state.slice2.count);

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/Milk">Milk</Link>
        </nav>

        <Routes>
          <Route path="/Milk" element={<Link_page count={count}/>} />
        </Routes>
      </BrowserRouter>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h1>DasStore</h1>
        <h2>Card: ({count})</h2>
      </div>
    </>
  );
}
