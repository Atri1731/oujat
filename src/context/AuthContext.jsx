import { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const API_URL = "http://localhost:4000/api/auth";

  const login = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.data;
      const token = data.data?.accessToken;

      setUser(data.data.user);
      setIsAuthenticated(true);
      localStorage.setItem("token", token);
      return data;
    } catch (error) {
      if (error.response) {
        throw error.response.data.message;
      } else {
        throw error.message;
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
