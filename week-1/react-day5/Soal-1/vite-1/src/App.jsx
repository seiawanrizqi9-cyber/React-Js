import React, { useState } from "react";

export default function App() {
  const [counter, setcounter] = useState(0);
  
  return (
    <>
      <div style={{ background: "#515151ff", color: "white", padding: "10px", borderRadius: "15px" }}>
        <h1>Aplikasi Counter Sederhana</h1>

        <p>Jumlah counter: {counter}</p>

        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <button onClick={() => {setcounter(counter - 1)}}>-</button>
          <input
            type="text"
            value={counter}
            onChange={(event) => {
              setcounter(event.target.value);
            }}
          />
          <button onClick={() => {setcounter(counter + 1)}}>+</button>
        </div>
      </div>
    </>
  );
}
