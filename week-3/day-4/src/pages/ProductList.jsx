import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://api.escuelajs.co/api/v1/products', {
          headers: { 'Accept': 'application/json' }
        });
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Memuat produk...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Semua Produk</h1>
      {/* Grid 4 kolom di layar medium ke atas */}
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="block bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
              {product.images[0] ? (
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="object-contain max-h-full"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/150?text=No+Image'}
                />
              ) : (
                <span className="text-gray-400 text-xs">Tidak ada gambar</span>
              )}
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-gray-900 line-clamp-2 text-sm mb-2">
                {product.title}
              </h2>
              <p className="text-emerald-600 font-bold">
                Rp {Number(product.price).toLocaleString('id-ID')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}