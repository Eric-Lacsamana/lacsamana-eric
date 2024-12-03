import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SeminarsPage = () => {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch seminars on initial load
  useEffect(() => {
    const fetchSeminars = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/seminars');
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

  const handleDeleteSeminar = async (seminarId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/seminars/${seminarId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete seminar');
      }

      setSeminars(seminars.filter(seminar => seminar._id !== seminarId));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard - Upcoming Seminars</h1>

      <div className="text-right mb-4">
        <Link to="/admin/seminars/$" className="btn btn-primary">Add New Seminar</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {seminars.map((seminar) => (
          <div key={seminar._id} className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
       
            <Link to={`/admin/seminars/${seminar._id}`} className="block">
              <figure className="overflow-hidden">
                  View
              </figure>
            </Link>

            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold truncate">{seminar.title}</h2>
              <p className="text-sm text-gray-700">{seminar.description}</p>
              <p className="text-sm text-gray-500 mt-2">{new Date(seminar.date).toLocaleDateString()}</p>

              <div className="mt-4">
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
              </div>

              <div className="card-actions justify-end mt-4">
                <Link to={`/admin/seminars/edit/${seminar._id}`} className="btn btn-secondary mr-2">Edit</Link>
                <button 
                  onClick={() => handleDeleteSeminar(seminar._id)} 
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeminarsPage;
