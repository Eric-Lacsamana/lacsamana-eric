import React from 'react';
import { FaPlus } from 'react-icons/fa'; 
import { Link, useLocation } from 'react-router-dom';

const FloatingButton = () => {
  const location = useLocation();
  const showToPages = ['/', '/admin/seminars'];

  if (!showToPages.includes(location.pathname)) {
    return null; 
  }

  return (
    <Link to="/admin/seminars/add">
      <button className="btn btn-primary fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all hover:bg-blue-500">
        <FaPlus className="h-8 w-8 text-white" />
      </button>
    </Link>
  );

};

export default FloatingButton;
