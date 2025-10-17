import React from 'react';

const ANIME_NAMES = [
  'Sword Art Online',
  'Log Horizon',
  'Attack on Titan',
  'Jujutsu Kaisen',
  'Demon Slayer',
  'My Hero Academia',
  'Cyberpunk: Edgerunners',
  'Fate/Zero',
  'Overlord',
];

export default function AnimeList() {
  console.log('AnimeList dirender');

  for (let i = 0; i < 15_000; i++) {
    void Math.sin(i * 0.01);
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold text-gray-800 mb-3">Daftar Anime Action</h3>
      <ul className="space-y-1">
        {ANIME_NAMES.map((name, index) => (
          <li key={index} className="text-sm text-gray-700">• {name}</li>
        ))}
      </ul>
    </div>
  );
}