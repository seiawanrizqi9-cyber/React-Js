import { useRef } from "react";

const DOMAccess = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto border rounded-lg shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Tugas 1: Akses DOM dengan useRef
      </h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Klik tombol dibawah untuk fokus ke sini"
        className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      <button
        onClick={handleFocusClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Fokus ke Input
      </button>
    </div>
  );
};

export default DOMAccess;
