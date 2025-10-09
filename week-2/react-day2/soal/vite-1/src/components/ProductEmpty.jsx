import React from "react";

// Style untuk komponen ini
const cardStyle = {
  backgroundColor: "#757575",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  width: "90%",
  maxWidth: "600px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const titleStyle = {
  color: "#333",
  paddingBottom: "10px",
  marginBottom: "20px",
};

export default function ProductEmpty() {
  const ProductList = [];

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Soal 5: Product List (Empty)</h2>
      {ProductList.length === 0 ? (
        <p>Tidak ada produk tersedia.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {ProductList.map((product) => (
            <li key={product.id}>
              {product.name} - Rp{product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
