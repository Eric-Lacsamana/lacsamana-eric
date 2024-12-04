import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SeminarForm from '../components/SeminarForm';

const EditSeminarPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seminar, setSeminar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchSeminar = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/seminars/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch seminar');
        }
        const data = await response.json();
        setSeminar(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeminar();
  }, [id, token]);

  const handleSubmit = async (formData) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/seminars/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update seminar');
      }

      navigate('/admin/seminars'); 
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading seminar...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!seminar) {
    return <p>No seminar found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Edit Seminar</h1>
      <SeminarForm onSubmit={handleSubmit} initialData={seminar} />
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          form="seminar-form"
          className="btn btn-primary w-full max-w-xs"
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Seminar'}
        </button>
      </div>
    </div>
  );
};

export default EditSeminarPage;
