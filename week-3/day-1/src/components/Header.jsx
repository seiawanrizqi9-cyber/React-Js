import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useNotification } from '../hooks/useNotification';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { count, addNotification } = useNotification();

  const text = {
    id: 'Selamat Datang',
    en: 'Welcome'
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{text[language]} 👋</h1>

      <div className="flex items-center gap-4">
        {/* Notification counter */}
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
          <span>🔔 Notification</span>
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {count}
          </span>
          <button
            onClick={addNotification}
            className="ml-2 px-2 py-1 bg-green-500 text-white rounded text-xs"
          >
            Add
          </button>
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg font-medium"
        >
          🌐 {language === 'id' ? 'EN' : 'ID'}
        </button>
      </div>
    </div>
  );
};

export default Header;
