import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SeminarDetail from '../components/SeminarDetails';

const SeminarDetailsPage = () => {
  const { id } = useParams();
  const [seminar, setSeminar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSeminarDetails = async () => {
      const token = localStorage.getItem('jwtToken');
      
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/seminars/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch seminar details');
        }
        const data = await response.json();
        setSeminar(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeminarDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!seminar) return <p>No seminar found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{seminar.title}</h1>
      <SeminarDetail seminar={seminar} onBackClick={() => navigate('/admin/seminars')} />
    </div>
  );
};

export default SeminarDetailsPage;
