import React from 'react';
import { useUserContext } from '../hooks/useUserContext';

const UserProfile = () => {
  const { user, updateProfile, logout } = useUserContext();

  if (!user.isLoggedIn) return null;

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={updateProfile}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Update Profile
        </button>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
