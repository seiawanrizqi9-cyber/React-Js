import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Timer dimulai!');
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Timer dibersihkan!');
    };
  }, []);

  return (
    <div>
      <h2>Timer Clean Up Function (Soal 3)</h2>
      <h2>Timer: {count} detik</h2>
    </div>
  );
}

export default Timer;