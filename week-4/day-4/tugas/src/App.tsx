import DOMAccess from './components/DOMAccess';
import Modal from './components/Modal';
import WithLoading from './components/WithLoading';
import ToggleDemo from './components/Toggle';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 space-y-8">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Tugas React Lanjutan
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          useRef, Portal, HOC, dan Render Props
        </p>
      </header>

      <DOMAccess />
      <Modal />
      <WithLoading />
      <ToggleDemo />
    </div>
  );
}

export default App;