import React, { useState } from 'react';
import AnimeList from './AnimeList';
import TrendingChart from './TrendingChart';
import RecommendationCard from './RecommendationCard';

export default function Parent5() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="mt-8 mb-8 w-full max-w-md mx-auto bg-gray-200 rounded-xl shadow-md p-6 space-y-5">
      <h2 className="text-xl font-bold text-center text-gray-800">
        Performance Profiling (Soal 5)
      </h2>

      <button
        onClick={() => setRefreshKey(k => k + 1)}
        className="block mx-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
      >
        Refresh Daftar
      </button>

      <AnimeList key={refreshKey} />
      <TrendingChart />
      <RecommendationCard />
    </div>
  );
}