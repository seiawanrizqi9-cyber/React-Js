import { useParams, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
          headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) throw new Error('Produk tidak ditemukan');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-600">Produk tidak ditemukan.</p>
        <Link to="/products" className="text-emerald-600 mt-4 inline-block">← Kembali ke Daftar Produk</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <Link to="/products" className="text-emerald-600 mb-6 inline-block">← Kembali ke Produk</Link>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="md:flex">
          {/* Gambar */}
          <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
            {product.images[0] ? (
              <img
                src={product.images[0]}
                alt={product.title}
                className="max-h-96 object-contain"
                onError={(e) => e.target.src = 'https://via.placeholder.com/300?text=Image+Error'}
              />
            ) : (
              <div className="text-gray-400">Tidak ada gambar</div>
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
            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
            <button className="w-full py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition shadow-md">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}