import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo di kiri */}
        <div className="text-xl font-bold text-emerald-600">TokoSerbaguna</div>

        {/* Menu di kanan */}
        <div className="flex space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-700 hover:text-emerald-600'}`
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-700 hover:text-emerald-600'}`
            }
          >
            Produk
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-700 hover:text-emerald-600'}`
            }
          >
            Tentang
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-700 hover:text-emerald-600'}`
            }
          >
            Kontak
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `font-medium ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-700 hover:text-emerald-600'}`
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}