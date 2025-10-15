import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const dummyData = [
    { name: 'Rizqi Setiawan', email: 'Rizqi@example.com' },
    { name: 'Azka Rahman', email: 'Azka@example.com' }
  ];

  const [user, setUser] = useState({
    name: 'Guest',
    email: 'guest@example.com',
    isLoggedIn: false
  });

  const login = () => setUser({ ...dummyData[0], isLoggedIn: true });
  const updateProfile = () =>
    setUser(prev => ({
      ...prev,
      name: prev.name === dummyData[0].name ? dummyData[1].name : dummyData[0].name,
      email: prev.email === dummyData[0].email ? dummyData[1].email : dummyData[0].email
    }));
  const logout = () =>
    setUser({ name: 'Guest', email: 'guest@example.com', isLoggedIn: false });

  return (
    <UserContext.Provider value={{ user, login, updateProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
