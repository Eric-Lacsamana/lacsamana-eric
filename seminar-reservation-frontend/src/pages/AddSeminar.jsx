import React, { useState } from 'react';

import SeminarForm from '../components/SeminarForm';

const AddSeminarPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/seminars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create seminar');
      }

    
    } catch (err) {
      // setError(err.message);

    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Seminar</h1>
      <SeminarForm onSubmit={handleSubmit} />
      <div className="flex justify-center mt-6">
          <button
            form='add-seminar-form'
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
