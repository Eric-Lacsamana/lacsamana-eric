import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SeminarDetailsPage = () => {
  const { id } = useParams();
  const [seminar, setSeminar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSeminarDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/seminars/${id}`);
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

      <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{seminar.description}</h2>
        <p className="text-sm text-gray-500">Date: {new Date(seminar.date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> {seminar.timeFrame.from} - {seminar.timeFrame.to}</p>
        <p><strong>Venue:</strong> {seminar.venue}</p>
        <p><strong>Speaker:</strong> {seminar.speaker.name}</p>
        {seminar.speaker.linkedin && (
          <p>
            <strong>LinkedIn: </strong>
            <a href={seminar.speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {seminar.speaker.name}
            </a>
          </p>
        )}
        <p><strong>Fee:</strong> ${seminar.fee}</p>
        <p><strong>Slots Available:</strong> {seminar.slotsAvailable}</p>

        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate('/admin/seminars')} 
            className="btn btn-secondary"
          >
            Back to Seminars
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeminarDetailsPage;
