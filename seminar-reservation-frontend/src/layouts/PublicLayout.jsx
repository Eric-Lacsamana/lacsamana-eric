import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PublicLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
