import React from "react";

function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid white",
        backgroundColor: "black",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h2> {props.ProductName} </h2>
      <p>Harga: ${props.price} </p>
      <p>Stok: {props.stock} </p>
      {props.isAvailable && <p style={{ color: "green" }}>Tersedia</p>}
    </div>
  );
}

export default ProductCard;
