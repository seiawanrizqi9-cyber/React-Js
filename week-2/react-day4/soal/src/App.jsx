import React from "react";
import FetchApi from "./components/FetchApi";
import AxiosData from "./components/Axios";
import FetchPost from "./components/AbortFetch";
import ManipulasiJson from "./components/ManipulasiJson";

export default function App() {
  return (
    <div>
      {/* Soal 1 */}
      <FetchApi />

      {/* Soal 2&3 */}
      <AxiosData />

      {/* Soal 4 */}
      <FetchPost />

      {/* Soal 5 */}
      <ManipulasiJson />
    </div>
  );
}