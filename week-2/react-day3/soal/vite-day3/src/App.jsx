import { useState } from "react";
import ConsoleMessage from "./components/ConsoleMessage";
import UserProfile from "./components/UserProfile";
import Timer from "./components/Timer";
import MultiEffectComponent from "./components/MultiEffectComponent";
import FetchData from "./components/FetchData";

function App() {
  const [currentUserId, setCurrentUserId] = useState(1);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {/* Soal 1 */}
        <ConsoleMessage />

        {/* Soal 2 */}
        <UserProfile userId={currentUserId} />
        <button onClick={() => setCurrentUserId((prevId) => prevId + 1)}>
          Lihat pengguna berikutnya
        </button>

        {/* Soal 3 */}
        <Timer />

        {/* Soal 4 */}
        <MultiEffectComponent />

        {/* Soal 5 */}
        <FetchData />
      </div>
    </>
  );
}

export default App;
