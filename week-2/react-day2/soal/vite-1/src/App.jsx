import React from "react";
import LoginStatus from "./components/LoginStatus";
import Greeting from "./components/Greeting";
import Status from "./components/Status";
import Product from "./components/Product";
import ProductEmpty from "./components/ProductEmpty";

export default function App() {
  return (
    <div style={{ textAlign: "center", alignItems: "center" }}>
      {/* Soal 1 */}
      <LoginStatus />

      {/* Soal 2 */}
      <Greeting />

      {/* Soal 3 */}
      <Status status={"success"} />

      {/* Soal 4 */}
      <Product />

      {/* Soal 5 */}
      <ProductEmpty />
    </div>
  );
}
