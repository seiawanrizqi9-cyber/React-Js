// src/pages/ProductsList.jsx
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://api.escuelajs.co/api/v1/products', {
          headers: { Accept: 'application/json' },
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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const q = form.get('q').trim();
    setSearchParams(q ? { search: q } : {});
  };

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
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Semua Produk</h1>
        <form onSubmit={handleSearch} className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              name="q"
              defaultValue={searchQuery}
              placeholder="Cari produk..."
              className="w-full px-4 py-2.5 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </form>
        {searchQuery && (
          <p className="mt-2 text-gray-600">
            Menampilkan {filteredProducts.length} hasil untuk "<strong>{searchQuery}</strong>"
          </p>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Tidak ada produk yang cocok.</p>
          <button
            onClick={() => setSearchParams({})}
            className="mt-4 text-emerald-600 underline"
          >
            Tampilkan semua produk
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                {product.images[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="object-contain max-h-full"
                    onError={(e) => (e.target.src = 'https://via.placeholder.com/150?text=No+Image')}
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
                <Link
                  to={`/products/${product.id}`}
                  className="mt-3 block w-full text-center px-3 py-1.5 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}