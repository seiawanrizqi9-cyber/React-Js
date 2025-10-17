import React, { useState, useCallback } from 'react';
import ButtonDisplay from './ButtonDisplay';

export default function Parent3() {
  const [count, setCount] = useState(0);

  const handleClickWithoutCallback = () => {
    setCount(c => c + 1);
  };

  const handleClickWithCallback = useCallback(() => {
    setCount(c => c + 1);
  }, []); 

  return (
    <div className="mt-8 w-full max-w-md mx-auto bg-gray-200 rounded-xl shadow-md p-6 space-y-5">
      <h2 className="text-xl font-bold text-center text-gray-800">
        Optimasi dengan useCallback (Soal 3)
      </h2>

      <div className="text-center">
        <p className="text-black">
          Count: <span className="font-semibold">{count}</span>
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-bold text-black mb-2">Tanpa useCallback:</p>
          <ButtonDisplay
            onClick={handleClickWithoutCallback}
            label={`+ Count (Tanpa useCallback)`}
          />
        </div>

        <div>
          <p className="text-sm font-bold text-black mb-2">Dengan useCallback:</p>
          <ButtonDisplay
            onClick={handleClickWithCallback}
            label={`+ Count (Dengan useCallback)`}
          />
        </div>
      </div>
    </div>
  );
}