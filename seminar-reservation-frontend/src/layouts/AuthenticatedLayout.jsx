import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import FloatingButton from '../components/FloatingButton';

const AuthenticatedLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated === false) {
        navigate('/login');
      }
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6 mt-16">
        <FloatingButton />
        <Outlet />
      </main>
    </div>
  );
};

export default AuthenticatedLayout;
