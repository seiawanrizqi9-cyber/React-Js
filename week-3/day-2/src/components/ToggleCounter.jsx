import useToggleCounter from '../hooks/useToggleCounter';

const ToggleCounter = () => {
  const {
    count,
    increment,
    decrement,
    reset,
    isVisible,
    toggleVisible,
  } = useToggleCounter(0, false);
  
  return (
    <div className="max-w-md mx-auto mt-6 p-6 border border-gray-200 rounded-lg bg-yellow-50">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Hooks Composition (Soal 3)</h2>

      <button
        onClick={toggleVisible}
        className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 transition mb-4"
      >
        {isVisible ? 'Sembunyikan' : 'Tampilkan'} Counter
      </button>

      {isVisible && (
        <div className="flex flex-col items-center space-y-4 mt-4">
          <div className="text-3xl font-bold text-gray-900 min-w-[60px] text-center">
            {count}
          </div>

          <div className="flex space-x-3">
            <button
              onClick={decrement}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition font-medium"
            >
              Kurang
            </button>
            <button
              onClick={increment}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-medium"
            >
              Tambah
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleCounter;