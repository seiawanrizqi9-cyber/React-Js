import React from "react";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px", gap: "20px" }}>
      <ProductCard
        ProductName="Baju"
        price="20000"
        stock="10"
        isAvailable={true}
      />
      <ProductCard
        ProductName="Celana"
        price="30000"
        stock="5"
        isAvailable={false}
      />
      <ProductCard
        ProductName="Sepatu"
        price="40000"
        stock="3"
        isAvailable={true}
      />
    </div>
  );
}

export default App;
