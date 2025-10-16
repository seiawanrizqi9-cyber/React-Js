import useToggle from '../hooks/useToggle';

const SecretMessage = () => {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div className="max-w-md mx-auto p-6 mt-8 border border-gray-200 rounded-lg bg-yellow-50">
      <h1 className="text-xl font-bold text-gray-800 mb-4">
        Custom Hook Sederhana (Soal 1)
      </h1>
      
      <button
        onClick={toggleVisible}
        className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 transition"
      >
        {isVisible ? 'Sembunyikan' : 'Tampilkan'} Pesan Rahasia
      </button>

      {isVisible && (
        <p className="mt-3 text-gray-700 italic leading-relaxed">
          Ssst.... Ini adalah pesan rahasia!
        </p>
      )}
    </div>
  );
};

export default SecretMessage;