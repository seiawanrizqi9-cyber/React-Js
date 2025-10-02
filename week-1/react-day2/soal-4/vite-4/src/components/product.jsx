export default function Product() {
  const products = [
    { id: 1, name: "Laptop", price: 7500000 },
    { id: 2, name: "Smartphone", price: 3500000 },
    { id: 3, name: "Headset", price: 250000 },
    { id: 4, name: "Keyboard", price: 500000 },
  ];

  // Style sederhana untuk kotak produk
  const containerStyle = {
    border: "1px solid #ccc", // Menambahkan border
    padding: "20px",
    margin: "40px auto", // Menengahkan kotak secara horizontal
    maxWidth: "400px",
    textAlign: "center",
    fontFamily: "sans-serif",
  };

  return (
    <div style={containerStyle}>
      <h2>Daftar Produk</h2>
      {/* Menggunakan style list default agar lebih sederhana */}
      <ul style={{ textAlign: "left", paddingLeft: "40px" }}>
        {products.map((item) => (
          <li key={item.id} style={{ padding: "5px 0" }}>
            {item.name} -{" "}
            <strong>Rp{item.price.toLocaleString("id-ID")}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
