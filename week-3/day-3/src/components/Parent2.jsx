import React, { useState, useMemo } from 'react';
import ExpensiveResult from './ExpensiveResult';

export default function Parent2() {
  const [inputValue, setInputValue] = useState(10);
  const [otherState, setOtherState] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log('useMemo: Hitung ulang hanya jika inputValue berubah');

    let result = 1n; 
    for (let i = 1n; i <= BigInt(inputValue > 0 ? inputValue : 1); i++) {
      result *= i;
    }
    return result.toString().slice(0, 20) + '...'; 
  }, [inputValue]);

  return (
    <div className="mt-8 w-full max-w-md mx-auto bg-gray-200 rounded-xl shadow-md p-6 space-y-5">
      <h2 className="text-xl font-bold text-center text-gray-800">
        Optimasi dengan useMemo (Soal 2)
      </h2>

      <div className="text-center space-y-1 text-black">
        <p>Input Value: <span className="font-semibold">{inputValue}</span></p>
        <p>Other State: <span className="font-semibold">{otherState}</span></p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setInputValue(v => Math.min(v + 1, 20))}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
        >
          + Input Value
        </button>
        <button
          onClick={() => setOtherState(s => s + 1)}
          className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition text-sm"
        > 
          + Other State
        </button>
        <button
          onClick={() => setInputValue(v => Math.max(v - 1, 1))}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
        >
          - Input Value
        </button>
      </div>

      <div>
        <ExpensiveResult value={expensiveValue} />
      </div>
    </div>
  );
}