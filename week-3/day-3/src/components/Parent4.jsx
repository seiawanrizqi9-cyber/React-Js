import React, { Suspense, lazy, useState } from 'react';

const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import('./Profile'));
const Dashboard = lazy(() => import('./Dashboard'));

export default function Parent4() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'profile':
        return <Profile />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="mt-8 w-full max-w-md mx-auto bg-gray-200 rounded-xl shadow-md p-6 space-y-5">
      <h2 className="text-xl font-bold text-center text-gray-800">
        Code Splitting & Lazy Loading (Soal 4)
      </h2>

      <div className="flex justify-center gap-2 flex-wrap">
        <button
          onClick={() => setActivePage('home')}
          className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
        >
          Home
        </button>
        <button
          onClick={() => setActivePage('profile')}
          className="px-3 py-1.5 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition"
        >
          Profile
        </button>
        <button
          onClick={() => setActivePage('dashboard')}
          className="px-3 py-1.5 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition"
        >
          Dashboard
        </button>
      </div>

      <div className="bg-white rounded-lg shadow min-h-[150px]">
        <Suspense fallback={
          <div className="p-6 text-center text-gray-500">
            Loading...
          </div>
        }>
          {renderPage()}
        </Suspense>
      </div>
    </div>
  );
}