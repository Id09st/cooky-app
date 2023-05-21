import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Xử lý đăng nhập và cập nhật user
  };

  const logout = () => {
    // Xử lý đăng xuất và cập nhật user
  };

  const signUp = (email, password) => {
    // Xử lý đăng ký và cập nhật user
  };

  const resetPassword = (email) => {
    // Xử lý đặt lại mật khẩu
  };

  const value = {
    user,
    login,
    logout,
    signUp,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
