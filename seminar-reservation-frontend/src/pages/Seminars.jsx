import React, { useState, useEffect } from 'react';
import SeminarCard from '../components/SeminarCard';

const SeminarsPage = () => {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchSeminars = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/seminars`);

        if (!response.ok) {
          throw new Error('Failed to fetch seminars');
        }
        const data = await response.json();
        setSeminars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeminars();
  }, []);

  const handleDeleteSeminar = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/seminars/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete seminar');
      }

      setSeminars(seminars.filter(seminar => seminar._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {seminars.map((seminar) => (
          <SeminarCard 
            key={seminar._id} 
            data={seminar} 
            onDelete={handleDeleteSeminar}
          />
        ))}
      </div>
    </div>
  );
};

export default SeminarsPage;
