import { useEffect, useState } from "react";

export default function MultiEffectComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`count telah berubah menjadi: ${count}`);
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Nama berubah menjadi:", name);
  }, [name]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(`key: ${e.key} telah ditekan`);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <h2>Multi Effect Component (Soal 4)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <p>Nama: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
