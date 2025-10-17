// src/components/RecommendationCard.jsx
import React from 'react';

const RECOMMENDATIONS = [
  'My Hero Academia',
  'Demon Slayer',
  'Fate/Zero'
];

export default function RecommendationCard() {
  console.log('RecommendationCard dirender');

  for (let i = 0; i < 10_000; i++) {
    void Math.cos(i * 0.01);
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold text-gray-800">Rekomendasi Anime Action</h3>
      <ul className="mt-2 space-y-1 text-sm">
        {RECOMMENDATIONS.map((title, idx) => (
          <li key={idx}>• {title}</li>
        ))}
      </ul>
    </div>
  );
}