import { useState, useEffect } from 'react';

// Komponen asli yang ingin diberi fitur loading
const UserProfile = ({ name, email }: { name: string; email: string }) => {
  return (
    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
      <h3 className="font-bold text-gray-800 dark:text-white">👤 {name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{email}</p>
    </div>
  );
};

// 🔁 HOC: withLoading
// Menerima komponen, kembalikan komponen baru dengan fitur loading
const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  // Return komponen baru
  return (props: P & { isLoading?: boolean }) => {
    if (props.isLoading) {
      return (
        <div className="flex flex-col items-center justify-center py-6">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Memuat...</p>
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

// Komponen demo yang menggunakan HOC
const WithLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulasi loading: set false setelah 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Terapkan HOC ke UserProfile
  const UserProfileWithLoading = withLoading(UserProfile);

  return (
    <div className="p-6 max-w-md mx-auto border rounded-lg shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Tugas 3: Higher-Order Component (HOC)
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Komponen di bawah menggunakan HOC <code>withLoading</code>.
      </p>

      {/* Gunakan komponen yang sudah dibungkus HOC */}
      <UserProfileWithLoading
        name="Ahmad Fauzi"
        email="ahmad@example.com"
        isLoading={isLoading}
      />
    </div>
  );
};

export default WithLoading;