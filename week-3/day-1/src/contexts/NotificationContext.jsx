import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const addNotification = () => setCount(prev => prev + 1);
  const clearNotifications = () => setCount(0);

  return (
    <NotificationContext.Provider value={{ count, addNotification, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
