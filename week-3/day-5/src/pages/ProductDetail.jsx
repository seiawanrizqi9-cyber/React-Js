import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams(); // Pastikan route di App.jsx: /products/:productId
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setError('ID produk tidak valid');
      setLoading(false);
      return;
    }

    let isCancelled = false;

    const fetchProduct = async () => {
      const startTime = Date.now();
      let fetchedData = null;
      let fetchError = null;

      try {
        // ✅ URL tanpa spasi!
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
        if (!res.ok) throw new Error('Produk tidak ditemukan');
        fetchedData = await res.json();
      } catch (err) {
        console.error('Fetch error:', err);
        fetchError = err.message || 'Gagal memuat produk';
      }

      // Tunggu minimal 2000ms (2 detik)
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 2000 - elapsed);
      await new Promise((resolve) => setTimeout(resolve, remaining));

      if (isCancelled) return;

      if (fetchError) {
        setError(fetchError);
      } else {
        setProduct(fetchedData);
      }
      setLoading(false);
    };

    fetchProduct();

    return () => {
      isCancelled = true;
    };
  }, [productId]);

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Memuat detail produk...</p>
      </div>
    );
  }

  // Error atau produk tidak ditemukan
  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-600 mb-4">{error || 'Produk tidak ditemukan.'}</p>
        <Link
          to="/products"
          className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
        >
          ← Kembali ke Daftar Produk
        </Link>
      </div>
    );
  }

  // ✅ TAMPILKAN DETAIL PRODUK
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <Link
        to="/products"
        className="text-emerald-600 mb-6 inline-block font-medium hover:underline"
      >
        ← Kembali ke Produk
      </Link>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="md:flex">
          {/* Gambar */}
          <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
            {product.images && product.images[0] ? (
              <img
                src={product.images[0]}
                alt={product.title}
                className="max-h-96 object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300?text=Gambar+Tidak+Tersedia';
                }}
              />
            ) : (
              <div className="text-gray-400 text-center">
                <span className="block text-4xl mb-2">🖼️</span>
                <span>Tidak ada gambar</span>
              </div>
            )}
          </div>

          {/* Info Produk */}
          <div className="md:w-1/2 p-8">
            <span className="text-sm font-medium text-emerald-600 uppercase">
              {product.category?.name || 'Umum'}
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{product.title}</h1>
            <p className="text-3xl font-bold text-emerald-600 mb-4">
              Rp {Number(product.price).toLocaleString('id-ID')}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description || 'Tidak ada deskripsi tersedia.'}
            </p>
            <button
              onClick={() => alert('Fitur keranjang akan dikembangkan nanti.')}
              className="w-full py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition shadow-md"
            >
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}