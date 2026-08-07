import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const defaultUser = {
  name: 'Aditi Sharma',
  email: 'aditi.sharma@pcte.edu',
  studentId: 'PCTE-2024-8842',
  program: 'Global Business Relations',
  role: 'PCTE Scholar',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    setIsAuthenticated(true);
    setUser({
      ...defaultUser,
      email: email || defaultUser.email,
    });
    return true;
  };

  const register = (formData) => {
    setIsAuthenticated(true);
    setUser({
      name: formData.name || 'New Scholar',
      email: formData.email || 'scholar@pcte.edu',
      studentId: formData.studentId || 'PCTE-2024-9999',
      program: formData.program || 'Computer Applications',
      role: 'PCTE Scholar',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    });
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const toggleDemoAuth = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login('aditi.sharma@pcte.edu', 'password');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
        toggleDemoAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
