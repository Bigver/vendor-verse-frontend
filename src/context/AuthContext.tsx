import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { requestMethod } from "../requestMethod";
import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import Swal from 'sweetalert2'

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean; // เพิ่มสถานะ loading
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true); // เริ่มต้น loading
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser(decodedToken); // ดึงข้อมูลจาก token
          autoLogout(decodedToken.exp * 1000 - Date.now());
        } else {
          logout(); // ลบ token ถ้าหมดอายุ
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        logout(); // ลบ token ถ้าถอดรหัสไม่ได้
      }
    }
    setLoading(false); // ตั้งค่า loading เป็น false หลังตรวจสอบเสร็จ
  }, []);

  const autoLogout = (milliseconds: number) => {
    setTimeout(() => {
      logout();
    }, milliseconds);
  };


  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(`${requestMethod}/users/login`, { email, password });
      const token = res.data.token;
      localStorage.setItem("token", token);
      const decodedToken: any = jwtDecode(token);
      setUser(decodedToken);
      window.location.href = '/'
    } catch (error) {
      Swal.fire({
        // position: "bottom",
        icon: "error",
        title: "Invalid credentials",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading  }}>
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
