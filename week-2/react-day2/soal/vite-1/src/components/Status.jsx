import React from "react";

export default function Status({ status }) {
  let content;

  switch (status) {
    case "loading":
      content = <p>Memuat data...</p>;
      break;
    case "success":
      content = <p>Data berhasil dimuat</p>;
      break;
    case "error":
      content = <p>Data Error</p>;
      break;
    default:
      content = <p>Status tidak diketahui</p>;
      break;
  }
  return (
    <div>
      <h2>Switch Statement (Soal-3)</h2>
      <h3>{content}</h3>
    </div>
  );
}
