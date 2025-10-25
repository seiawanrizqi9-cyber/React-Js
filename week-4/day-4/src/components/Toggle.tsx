import { useState } from 'react';

// Komponen logika: hanya urus state dan fungsi, tidak urus tampilan
const Toggle = ({ children }: { 
  children: (on: boolean, toggle: () => void) => React.ReactNode; 
}) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  // Serahkan tampilan sepenuhnya ke children (fungsi)
  return <>{children(on, toggle)}</>;
};

// Komponen demo utama
const ToggleDemo = () => {
  return (
    <div className="p-6 max-w-md mx-auto border rounded-lg shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Tugas 4: Render Props Pattern
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Dua contoh berbeda menggunakan logika yang sama:
      </p>

      {/* 🔹 Implementasi 1: Tombol ON/OFF */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Contoh 1: Tombol</h3>
        <Toggle>
          {(on, toggle) => (
            <button
              onClick={toggle}
              className={`px-4 py-2 rounded font-medium transition ${
                on
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              {on ? 'ON' : 'OFF'}
            </button>
          )}
        </Toggle>
      </div>

      {/* 🔹 Implementasi 2: Lampu dengan teks dan warna */}
      <div>
        <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Contoh 2: Lampu</h3>
        <Toggle>
          {(on, toggle) => (
            <div 
              onClick={toggle}
              className={`p-4 rounded cursor-pointer text-center transition ${
                on 
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              }`}
            >
              💡 Lampu: <strong>{on ? 'Menyala' : 'Mati'}</strong>
            </div>
          )}
        </Toggle>
      </div>
    </div>
  );
};

export default ToggleDemo;