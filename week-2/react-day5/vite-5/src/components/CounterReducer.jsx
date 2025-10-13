import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "tambah":
      return { count: state.count + 1 };
    case "kurang":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

export default function CountReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", margin: "1rem", textAlign: "center" }}>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "tambah" })}>Tambah</button>
      <button onClick={() => dispatch({ type: "kurang" })}>Kurang</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}