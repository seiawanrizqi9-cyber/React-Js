import React from "react";
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { CartProvider } from "./contexts/CartContext";
import { TaskProvider } from "./contexts/TaskContext";

import "./App.css";

import Header from "./components/Header";
import UserLogin from "./components/UserLogin";
import UserProfile from "./components/UserProfile";
import ThemeToggle from "./components/ThemeToggle";
import ProductList from "./components/ProductList";
import CartDisplay from "./components/CartDisplay";
import TaskDisplay from "./components/TaskDisplay";
import { useTheme } from "./hooks/useTheme";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "light" ? "bg-gray-100" : "bg-gray-900"
      } min-h-screen`}
    >
      {/* Header di atas */}
      <Header />

      <div className="max-w-5xl mx-auto space-y-6 mt-4 px-4">
        {/* Soal 1 */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className={`text-lg font-bold text-center mb-4`}>
            Soal 1: Context Provider Sederhana
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <UserLogin />
            <UserProfile />
          </div>
        </section>

        {/* Soal 2 */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className={`text-lg font-bold text-center mb-4`}>
            Soal 2: Theme Context dengan Toggle
          </h2>
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </section>

        {/* Soal 3 */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className={`text-lg font-bold text-center mb-4`}>
            Soal 3: Multiple Contexts Implementation
          </h2>
          <p className="text-gray-500 text-center">
            Gunakan tombol di header untuk ganti bahasa dan lihat jumlah
            notifikasi
          </p>
        </section>

        {/* Soal 4 */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className={`text-lg font-bold text-center mb-4`}>
            Soal 4: Task Harian
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TaskDisplay />
          </div>
        </section>

        {/* Soal 5 */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className={`text-lg font-bold text-center mb-4`}>
            Soal 5: Shopping Cart
          </h2>
          <ProductList />
          <CartDisplay />
        </section>
      </div>
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <NotificationProvider>
            <CartProvider>
              <TaskProvider>
                <AppContent />
              </TaskProvider>
            </CartProvider>
          </NotificationProvider>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
