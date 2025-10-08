import React from "react";
import "./App.css";
import EventHandler from "./components/EventHandler";
import SyntheticEvent from "./components/SyntheticEvent";
import Controlled from "./components/Controlled";
import UnControlled from "./components/UnControlled";
import MultipleInput from "./components/MultipleInput";

function App() {
  return (
    <div className="app-container">
        {/* Soal 1 */}
        <EventHandler />

        {/* Soal 2 */}
        <SyntheticEvent />

        {/* Soal 3 */}
        <Controlled />

        {/* Soal 4 */}
        <UnControlled />

        {/* Soal 5 */}
        <MultipleInput />
    </div>
  );
}

export default App;
