import React from "react";
import Calculator from "./components/Calculator";
import PropDrill from "./components/PropDrill";
import ShareState from "./components/SharedState";
import CountReducer from "./components/CounterReducer";
import ThemedApp from "./components/ThemedApp";
import ThemeProvider from "./context/ThemeContext";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <div>
      {/* Soal 1 */}
      <Calculator />

      {/* Soal 2 */}
      <PropDrill />

      {/* Soal 3 */}
      <ShareState />

      {/* Soal 4 */}
      <CountReducer />

      {/* Soal 5 */}
      <ThemeProvider>
        <ThemedApp />
        <ThemeButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
