import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const PortalModal = ({ isOpen, onClose, children }: { 
  isOpen: boolean; 
  onClose: () => void; 
  children: React.ReactNode; 
}) => {
  useEffect(() => {
    if (!isOpen) return; // hanya pasang listener jika modal terbuka

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]); // pastikan dependency lengkap

  // Baru boleh return null
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    console.error('Elemen #modal-root tidak ditemukan di public/index.html');
    return null;
  }

  return createPortal(
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()} // mencegah tutup saat klik di dalam
      >
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 w-full"
        >
          Tutup
        </button>
      </div>
    </div>,
    modalRoot
  );
};

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 max-w-md mx-auto border rounded-lg shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Tugas 2: Modal dengan Portal
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Modal ini dikontrol oleh komponen (simulasi).
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Buka Modal
      </button>

      <PortalModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3 className="font-semibold text-gray-800 dark:text-white">
          Halo! ini adalah simulasi modal
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Dibuka dan ditutup oleh komponen induk.
        </p>
      </PortalModal>
    </div>
  );
};

export default Modal;