// src/components/AuthenticatedLayout.js
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';

const AuthenticatedLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
 
    if (isAuthenticated !== undefined) {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthenticatedLayout;
