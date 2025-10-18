export default function Dashboard() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Selamat Datang di Dashboard</h2>
        <p className="text-gray-700 mb-4">
          Ini adalah halaman dashboard sederhana. Di sini Anda dapat memantau aktivitas akun, 
          melihat riwayat pesanan, dan mengelola preferensi toko Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
            <p className="text-2xl font-bold text-emerald-700">12</p>
            <p className="text-gray-700">Pesanan Aktif</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-2xl font-bold text-blue-700">8</p>
            <p className="text-gray-700">Produk Terjual</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <p className="text-2xl font-bold text-amber-700">Rp 2.450.000</p>
            <p className="text-gray-700">Pendapatan Bulan Ini</p>
          </div>
        </div>
      </div>
    </div>
  );
}