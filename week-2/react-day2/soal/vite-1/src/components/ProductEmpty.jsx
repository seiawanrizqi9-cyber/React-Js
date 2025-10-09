import React from "react";

export default function Product() {
  const ProductList = [];

  return (
    <div>
      <h2>Product List Empty(Soal-5)</h2>
      {ProductList.length === 0 ? (
        <p>Tidak ada produk tersedia.</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
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
