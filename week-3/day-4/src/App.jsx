import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductsList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard/DashboardLayout';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow py-6">
          <Routes>
            {/* Soal 1 */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Soal 2 */}
            {/* Hasil sudah ada di Navbar */}

            {/* Soal 3 */}
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:productId" element={<ProductDetail />} />

            {/* Soal 4 */}
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}