// AuthenticatedLayout.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthenticatedLayout = () => {
  const token = localStorage.getItem('jwtToken');

  if (!token) {
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
