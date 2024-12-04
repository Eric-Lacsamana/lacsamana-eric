import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddSeminarPage = () => {
  const history = useHistory();
  const [seminarData, setSeminarData] = useState({
    title: '',
    description: '',
    date: '',
    timeFrame: { from: '', to: '' },
    venue: '',
    speaker: { name: '', linkedin: '' },
    fee: 0,
    slotsAvailable: 0,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Handle nested fields like timeFrame and speaker
    if (name.includes('timeFrame') || name.includes('speaker')) {
      const [section, key] = name.split('.');
      setSeminarData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [key]: value,
        },
      }));
    } else {
      setSeminarData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/seminars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(seminarData),
      });

      if (!response.ok) {
        throw new Error('Failed to create seminar');
      }

      setLoading(false);
      history.push('/admin/seminars'); // Redirect to seminar list page
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Seminar</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={seminarData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={seminarData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={seminarData.date}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4 flex space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">From</label>
            <input
              type="time"
              name="timeFrame.from"
              value={seminarData.timeFrame.from}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">To</label>
            <input
              type="time"
              name="timeFrame.to"
              value={seminarData.timeFrame.to}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Venue</label>
          <input
            type="text"
            name="venue"
            value={seminarData.venue}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Speaker Name</label>
          <input
            type="text"
            name="speaker.name"
            value={seminarData.speaker.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Speaker LinkedIn</label>
          <input
            type="url"
            name="speaker.linkedin"
            value={seminarData.speaker.linkedin}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fee</label>
          <input
            type="number"
            name="fee"
            value={seminarData.fee}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
            min="0"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Slots Available</label>
          <input
            type="number"
            name="slotsAvailable"
            value={seminarData.slotsAvailable}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
            min="1"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="btn btn-primary w-full max-w-xs"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Create Seminar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSeminarPage;
