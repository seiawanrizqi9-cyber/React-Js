import { useState } from "react";

function ShopReport() {
  // Data barang (nama, harga, jumlah, diskon per item)
  const items = [
    { name: "Kopi Hitam", price: 15000, qty: 2, discount: 0.1 }, // 10%
    { name: "Roti Bakar", price: 20000, qty: 1, discount: 0.05 }, // 5%
    { name: "Teh Tarik", price: 12000, qty: 3, discount: 0.15 }, // 15%
  ];

  // Fungsi menghitung total harga tiap barang (harga × jumlah − diskon)
  const calculateItemTotal = (item) => {
    const subtotal = item.price * item.qty;
    const discountAmount = subtotal * item.discount;
    return subtotal - discountAmount;
  };

  // Hitung total keseluruhan
  const grandTotal = items.reduce((acc, item) => acc + calculateItemTotal(item), 0);

  // Manipulasi string: nama toko uppercase
  const shopName = "Shop Weekly Report";
  const shopNameUpper = shopName.toUpperCase();

  // State untuk menyapa pelanggan
  const [greeting] = useState("");

  const greetCustomer = (name) => {
    alert(`Selamat datang, ${name}!`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "26px",
        maxWidth: "400px",
        margin: "40px auto",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{shopNameUpper}</h2>
      <h3>Laporan Penjualan</h3>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} (x{item.qty}) - Rp{item.price.toLocaleString()}  
            <br />
            Diskon: {item.discount * 100}% → Total: Rp{calculateItemTotal(item).toLocaleString()}
          </li>
        ))}
      </ul>

      <h3>Total Keseluruhan: Rp{grandTotal.toLocaleString()}</h3>

      {/* Tombol untuk menyapa pelanggan */}
      <button
        onClick={() => greetCustomer("Rizqi")}
        style={{
          padding: "8px 12px",
          marginTop: "12px",
          borderRadius: "5px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Klik Disini
      </button>

      {/* Hasil sapaan */}
      {greeting && <p style={{ marginTop: "10px", fontWeight: "bold" }}>{greeting}</p>}
    </div>
  );
}

export default ShopReport;
