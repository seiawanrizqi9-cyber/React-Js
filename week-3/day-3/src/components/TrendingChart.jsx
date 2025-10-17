// src/components/TrendingChart.jsx
import React from 'react';

export default function TrendingChart() {
  console.log('📈 TrendingChart dirender');
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold text-gray-800 mb-2">Trending Minggu Ini</h3>
      <div className="flex items-end h-20 gap-1">
        {[60, 80, 40, 90, 70].map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-red-500 rounded-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}