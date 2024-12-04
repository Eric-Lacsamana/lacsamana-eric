import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import FloatingButton from '../components/FloatingButton';

const AuthenticatedLayout = () => {
  const navigate = useNavigate();
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
    return navigate('/login');
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
