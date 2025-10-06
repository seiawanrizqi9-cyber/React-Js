import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div style={{border: "1px solid White", borderRadius: "10px" ,padding: "30px"}}>
      <p>Count: {count}</p>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
    </div>
  );
}

export default Counter;
