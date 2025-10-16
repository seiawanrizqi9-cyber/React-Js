import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage('app-theme', 'light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="max-w-md mx-auto mt-6 mb-6 p-6 rounded-lg border border-gray-200 bg-yellow-50">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Custom Hook dengan Local Storage (Soal 5)</h2>
      
      <p className="mb-3 text-black">
        Tema saat ini: <span className="font-medium">{theme === 'light' ? 'Terang' : 'Gelap'}</span>
      </p>
      
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded text-sm font-medium transition ${
          theme === 'light'
            ? 'bg-gray-800 text-white hover:bg-gray-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Ganti ke Tema {theme === 'light' ? 'Gelap' : 'Terang'}
      </button>
    </div>
  );
};

export default ThemeToggle;