// src/pages/dashboard/Status.jsx
import { getAuth } from '../../utils/auth';

export default function Status() {
  const auth = getAuth();
  const role = auth?.role || 'Tamu';

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Status Akun</h2>
      
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm max-w-md">
        <p className="text-gray-700 mb-2">Anda saat ini login sebagai:</p>
        <div className="mt-3">
          {role === 'Admin' ? (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
              👑 Admin
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              👤 User
            </span>
          )}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Hanya pengguna dengan role <strong>Admin</strong> yang dapat mengakses halaman dashboard ini.
        </p>
      </div>
    </div>
  );
}