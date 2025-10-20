export default function Profile() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Profil Pengguna</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src="https://i.pravatar.cc/150?u=dinda123"
            alt="Dinda Wulandari"
            className="w-24 h-24 rounded-full object-cover border-4 border-emerald-100"
          />
        </div>
        <div className="flex-grow">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                defaultValue="Dinda Wulandari"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                defaultValue="dinda.wulandari@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Nomor Telepon</label>
              <input
                type="text"
                defaultValue="+62 812-3456-7890"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Alamat</label>
              <textarea
                rows="3"
                defaultValue="Jl. Mawar No. 45, Bandung"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}