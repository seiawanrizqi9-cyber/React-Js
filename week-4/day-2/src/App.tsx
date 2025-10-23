import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/Theme-Provider';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import { Toaster } from './components/ui/sonner';
import './App.css';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="*" element={<DashboardPage />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}