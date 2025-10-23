import SpotlightCard from './SpotlightCard';
import { Product } from '../types';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    toast(`${product.title} ditambahkan ke keranjang!`, {
      description: "Barang akan dikirim dalam 3-5 hari kerja.",
      duration: 3000,
    });
  };

  return (
    <SpotlightCard className="h-full flex flex-col">
      <div className="flex-1">
        {product.images[0] && (
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800 dark:text-white">{product.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              Rp{product.price.toLocaleString()}
            </span>
            <span className="text-yellow-500">★ {product.rating.toFixed(1)}</span>
          </div>
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Stok: {product.stock} • {product.category}
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Tambah ke Keranjang
        </Button>
      </div>
    </SpotlightCard>
  );
}