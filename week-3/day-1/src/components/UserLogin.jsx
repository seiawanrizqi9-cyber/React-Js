import React from 'react';
import { useUserContext } from '../hooks/useUserContext';

const UserLogin = () => {
  const { user, login } = useUserContext();

  if (user.isLoggedIn) return null;

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <button
        onClick={login}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
    </div>
  );
};

export default UserLogin;
