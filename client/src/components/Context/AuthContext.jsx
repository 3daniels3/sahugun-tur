import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || null);

  const login = (email) => {
    setUserEmail(email);
    localStorage.setItem("userEmail", email);
  };

  const logout = () => {
    setUserEmail(null);
    localStorage.removeItem("userEmail");
  };

  return (
    <AuthContext.Provider value={{ userEmail, setUserEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
