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

export default function Product() {
  const ProductList = [
    { id: 1, name: "Gas", price: 20000 },
    { id: 2, name: "Minyak Goreng", price: 18000 },
    { id: 3, name: "Minuman", price: 8000 },
    { id: 4, name: "Pulsa", price: 35000 },
  ];

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Soal 4: Product List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {ProductList.map((product) => (
          <li key={product.id}>
            {product.name} - Rp{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
