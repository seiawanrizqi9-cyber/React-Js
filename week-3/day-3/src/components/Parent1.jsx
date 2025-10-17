import React, { useState } from 'react';
import Unoptimized from './Unoptimized';
import Optimized from './Optimized';

export default function Parent1() {
  const [parentCount, setParentCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  return (
    <div className="mt-8 w-full max-w-md mx-auto bg-gray-200 rounded-xl shadow-md p-6 space-y-5">
      <h2 className="text-xl font-bold text-center text-gray-800">
        React.memo Demo (Soal 1)
      </h2>

      <div className="text-center space-y-1 text-black">
        <p>Parent Count: <span className="font-semibold">{parentCount}</span></p>
        <p>Other State: <span className="font-semibold">{otherState}</span></p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setParentCount(c => c + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
        >
          + Parent Count
        </button>
        <button
          onClick={() => setOtherState(s => s + 1)}
          className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition text-sm"
        >
          + Other State
        </button>
      </div>

      <div>
        <Unoptimized count={parentCount} />
        <Optimized count={parentCount} />
      </div>
    </div>
  );
}