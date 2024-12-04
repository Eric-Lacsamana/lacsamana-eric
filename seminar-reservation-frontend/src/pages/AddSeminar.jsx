import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SeminarForm from '../components/SeminarForm';

const AddSeminarPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    const payload = JSON.stringify(data);

    setIsLoading(true);

    const token = localStorage.getItem('jwtToken');

    if (!token) {
      console.error('No token found');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/seminars`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Failed to create seminar');
      }
  
      navigate('/admin/seminars'); 
    } catch (err) {
      console.error('Error:', err);
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Seminar</h1>
      <SeminarForm onSubmit={handleSubmit} />
      <div className="flex justify-center mt-6">
        <button
          form="seminar-form"
          type="submit"
          className="btn btn-primary w-full max-w-xs"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Create Seminar'}
        </button>
      </div>
    </div>
  );
};

export default AddSeminarPage;
