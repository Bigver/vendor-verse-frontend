import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // สมมติว่ามี AuthContext ใช้จัดการ authentication

interface AuthMiddlewareProps {
    children: React.ReactNode;
}

export const RequireAuth: React.FC<AuthMiddlewareProps> = ({ children }) => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!loading && !user) {
        navigate("/login");
      }
    }, [user, loading, navigate]);
  
    if (loading) {
      return <p>Loading...</p>; // หรือแสดง spinner
    }
  
    return <>{user ? children : null}</>;
  };