import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SeminarForm from '../components/SeminarForm';

const EditSeminarPage = () => {
  const { seminarId } = useParams();
  const [seminar, setSeminar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchSeminar = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/seminars/${seminarId}`);
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
  }, [seminarId]);

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/seminars/${seminarId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update seminar');
      }

      history.push(`/seminars/${seminarId}`);
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
      <SeminarForm onSubmit={(e, formData) => handleSubmit(e, formData)} initialData={seminar} />
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
