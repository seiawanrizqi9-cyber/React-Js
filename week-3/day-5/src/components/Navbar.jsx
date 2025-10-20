import { NavLink } from 'react-router-dom';
import { isAuthenticated, getAuth } from '../utils/auth';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
  const isLoggedIn = isAuthenticated();
  const auth = getAuth();
  const initial = auth?.name ? auth.name.charAt(0).toUpperCase() : 'U';

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-emerald-600">TokoSerbaguna</div>

        <div className="flex items-center space-x-5">
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

          {/* Profil */}
          <div>
            {isLoggedIn ? (
              <ProfileDropdown initial={initial} />
            ) : (
              <NavLink to="/login">
                <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold">
                  👤
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}