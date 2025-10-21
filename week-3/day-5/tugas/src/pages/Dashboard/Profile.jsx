import { getAuth } from '../../utils/auth';

export default function Profile() {
  const auth = getAuth();

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Profil Pengguna</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-3xl">
            👤
          </div>
        </div>
        <div className="flex-grow">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Nama Lengkap</label>
              <div className="px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                {auth?.name || '—'}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <div className="px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                {auth?.email || '—'}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Role</label>
              <div className="px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                {auth?.role || '—'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}