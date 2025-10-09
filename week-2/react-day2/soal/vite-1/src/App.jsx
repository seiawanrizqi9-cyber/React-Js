import React from "react";
import LoginStatus from "./components/LoginStatus";
import Greeting from "./components/Greeting";
import Status from "./components/Status";
import Product from "./components/Product";
import ProductEmpty from "./components/ProductEmpty";

// Style untuk kontainer utama aplikasi
const appContainerStyle = {
  fontFamily: "sans-serif",
  backgroundColor: "#444444ff",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Memusatkan semua kartu soal secara horizontal
  gap: "20px", // Memberi jarak antar kartu soal
};

export default function App() {
  return (
    <div style={appContainerStyle}>
      <LoginStatus />
      <Greeting />
      <Status status={"success"} />
      <Product />
      <ProductEmpty />
    </div>
  );
}
