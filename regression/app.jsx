import React, { useState } from "react";
import ReactDom from "react-dom/client";

function Main() {
  const [X, setX] = useState(0);
  const [xber, setXber] = useState(0);
  const [yber, setYber] = useState(0);

  // Store user-entered values
  const [data, setData] = useState([]);

  // Reset data array when size changes
  React.useEffect(() => {
    setData(Array.from({ length: X }, () => ({ x: "", y: "" })));
  }, [X]);

  // Handle input change
  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);

    // Calculate averages
    const totalX = newData.reduce((sum, row) => sum + (Number(row.x) || 0), 0);
    const totalY = newData.reduce((sum, row) => sum + (Number(row.y) || 0), 0);

    setXber(totalX / (newData.length || 1));
    setYber(totalY / (newData.length || 1));
  };

  // === Calculate totals ===
  let sumDX2 = 0; // Σ(Xi - X̄)² 
  let sumDXDY = 0; // Σ(Xi - X̄)(Yi - Ȳ)

  data.forEach((row) => {
    const xi = Number(row.x) || 0;
    const yi = Number(row.y) || 0;
    const dx = xi - xber;
    const dy = yi - yber;
    sumDX2 += dx * dx;
    sumDXDY += dx * dy;
  });

  // === Regression coefficients ===
  const b = sumDX2 !== 0 ? sumDXDY / sumDX2 : 0;
  const a = yber - b * xber;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          background: "#f3f4f6",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
           <div style={{ marginTop: "20px", textAlign: "center" }}>
        <label htmlFor="first">Enter Data size: </label>
        <input
          type="range"
          id="first"
          min={1}
          max={20}
          value={X}
          onChange={(e) => setX(Number(e.target.value))}
        />
        <span style={{ marginLeft: "10px" }}>{X}</span>
      </div>
        {/* Header */}
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <h1 style={{ margin: "5px", color: "#1e3a8a" }}>X̄: {xber.toFixed(2)}</h1>
          <h1 style={{ margin: "5px", color: "#b91c1c" }}>Ȳ: {yber.toFixed(2)}</h1>
        </div>

        {/* Table */}
        <table
          style={{
            borderCollapse: "collapse",
            width: "80%",
            maxWidth: "800px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            background: "white",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ background: "#2563eb", color: "white" }}>
              <th style={thStyle}>X</th>
              <th style={thStyle}>Y</th>
              <th style={thStyle}>Xi - X̄</th>
              <th style={thStyle}>Yi - Ȳ</th>
              <th style={thStyle}>(Xi - X̄)²</th>
              <th style={thStyle}>(Xi - X̄)(Yi - Ȳ)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const xi = Number(row.x) || 0;
              const yi = Number(row.y) || 0;
              const dx = xi - xber;
              const dy = yi - yber;

              return (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td style={tdStyle}>
                    <input
                      type="number"
                      value={row.x}
                      onChange={(e) => handleChange(index, "x", e.target.value)}
                      style={{ width: "80px", textAlign: "center" }}
                    />
                  </td>
                  <td style={tdStyle}>
                    <input
                      type="number"
                      value={row.y}
                      onChange={(e) => handleChange(index, "y", e.target.value)}
                      style={{ width: "80px", textAlign: "center" }}
                    />
                  </td>
                  <td style={tdStyle}>{dx.toFixed(2)}</td>
                  <td style={tdStyle}>{dy.toFixed(2)}</td>
                  <td style={tdStyle}>{(dx * dx).toFixed(2)}</td>
                  <td style={tdStyle}>{(dx * dy).toFixed(2)}</td>
                </tr>
              );
            })}

            {/* Totals Row */}
            <tr style={{ background: "#e5e7eb", fontWeight: "bold", textAlign: "center" }}>
              <td style={tdStyle} colSpan={4}>Σ Totals</td>
              <td style={tdStyle}>{sumDX2.toFixed(2)}</td>
              <td style={tdStyle}>{sumDXDY.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        {/* Regression Calculation */}
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            textAlign: "left",
            width: "80%",
            maxWidth: "800px",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#1e40af" }}>Regression Calculation</h2>
          <p><b>b</b> = Σ(Xi - X̄)(Yi - Ȳ) / Σ(Xi - X̄)²</p>
          <p>= {sumDXDY.toFixed(2)} / {sumDX2.toFixed(2)} = <b>{b.toFixed(4)}</b></p>
          <p><b>a</b> = Ȳ - b × X̄</p>
          <p>= {yber.toFixed(2)} - ({b.toFixed(4)} × {xber.toFixed(2)}) = <b>{a.toFixed(4)}</b></p>
        </div>
      </div>

   
    </>
  );
}

const thStyle = {
  padding: "12px",
  border: "1px solid #e5e7eb",
  fontSize: "16px",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #e5e7eb",
  fontSize: "14px",
};

ReactDom.createRoot(document.getElementById("root")).render(<Main />);
