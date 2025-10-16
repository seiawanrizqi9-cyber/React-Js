import useToggle from '../hooks/useToggle';

const NotificationSwitch = () => {
  const [isEnabled, toggleEnabled] = useToggle(true);

  return (
    <div className="max-w-md mx-auto mt-4 p-6 border border-gray-200 rounded-lg bg-yellow-50">
      <div className="flex items-center justify-between">
        <span className="text-gray-700">
          Notifikasi: <span className={isEnabled ? 'text-green-600 font-medium' : 'text-gray-600'}>{isEnabled ? 'Aktif' : 'Nonaktif'}</span>
        </span>
        <button
          onClick={toggleEnabled}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
            isEnabled ? 'bg-green-500' : 'bg-gray-600'
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow transition-transform ${
              isEnabled ? 'translate-x-6' : ''
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default NotificationSwitch;