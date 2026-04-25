import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    role: null,
  });

  // ✅ Load from localStorage on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      setAuth({ token, role });
    }
  }, []);

  // ✅ FIXED LOGIN
  const login = (data) => {
    const roleMap = {
      "69e9c82ddb1aa37d2bd79669": "admin",
      "69e9c82ddb1aa37d2bd79670": "resident",
      "69e9c82ddb1aa37d2bd79671": "security_guard",
    };

    const token = data.token;
    const role = roleMap[data.user.role];

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    setAuth({ token, role });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setAuth({ token: null, role: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
