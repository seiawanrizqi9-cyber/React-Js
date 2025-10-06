import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const kali = () => {
    setCount((prevCount) => prevCount * 2);
  };

  const bagi = () => {
    setCount((prevCount) => prevCount / 2);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{background: "#0088ffff", border: "1px solid White", borderRadius: "10px" ,padding: "30px"}}>
      <h2>Aplikasi Counter Sederhana</h2>
      <p>Counter: {count}</p>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", justifyContent: "center" }}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={kali}>x</button>
        <button onClick={bagi}>:</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
