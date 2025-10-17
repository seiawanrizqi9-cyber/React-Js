import React from 'react';

export default function ExpensiveResult({ value }) {
  console.log('ExpensiveResult dirender');
  
  return (
    <div className="p-3 rounded text-black text-sm font-semibold">
      Hasil Perhitungan: {value}
    </div>
  );
}