import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditSeminar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [seminar, setSeminar] = useState({
    title: '',
    description: '',
    date: '',
    timeFrame: { from: '', to: '' },
    venue: '',
    speaker: { name: '', linkedin: '' },
    fee: 0,
    slotsAvailable: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSeminar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleTimeFrameChange = (e) => {
    const { name, value } = e.target;
    setSeminar((prevState) => ({
      ...prevState,
      timeFrame: {
        ...prevState.timeFrame,
        [name]: value,
      },
    }));
  };


  const handleSpeakerChange = (e) => {
    const { name, value } = e.target;
    setSeminar((prevState) => ({
      ...prevState,
      speaker: {
        ...prevState.speaker,
        [name]: value,
      },
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/seminars/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(seminar),
      });

      if (!response.ok) {
        throw new Error('Failed to update seminar');
      }

      navigate('/admin/seminars');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading seminar details...</p>;


  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Edit Seminar</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={seminar.title}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg"
            required
          />
        </div>

        <div className="col-span-1 sm:col-span-2">
          <label htmlFor="description" className="block text-lg font-semibold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={seminar.description}
            onChange={handleChange}
			rows={5}
            className="textarea textarea-bordered w-full px-4 py-2 rounded-lg"
            required
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="date" className="block text-lg font-semibold mb-2">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={seminar.date}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg"
            required
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="venue" className="block text-lg font-semibold mb-2">Venue</label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={seminar.venue}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg"
            required
          />
        </div>

        <div className="col-span-1 sm:col-span-2 flex gap-6">
          <div className="flex-1">
            <label htmlFor="from" className="block text-lg font-semibold mb-2">From</label>
            <input
              type="time"
              id="from"
              name="from"
              value={seminar.timeFrame.from}
              onChange={handleTimeFrameChange}
              className="input input-bordered w-full px-4 py-2 rounded-lg"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="to" className="block text-lg font-semibold mb-2">To</label>
            <input
              type="time"
              id="to"
              name="to"
              value={seminar.timeFrame.to}
              onChange={handleTimeFrameChange}
              className="input input-bordered w-full px-4 py-2 rounded-lg"
              required
            />
          </div>
        </div>

        <div className="col-span-1">
          <label htmlFor="speakerName" className="block text-lg font-semibold mb-2">Speaker Name</label>
          <input
            type="text"
            id="speakerName"
            name="name"
            value={seminar.speaker.name}
            onChange={handleSpeakerChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg"
            required
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="linkedin" className="block text-lg font-semibold mb-2">Speaker LinkedIn</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={seminar.speaker.linkedin}
            onChange={handleSpeakerChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="fee" className="block text-lg font-semibold mb-2">Fee</label>
          <input
            type="number"
            id="fee"
            name="fee"
            value={seminar.fee}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg"
            required
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="slotsAvailable" className="block text-lg font-semibold mb-2">Slots Available</label>
          <input
            type="number"
            id="slotsAvailable"
            name="slotsAvailable"
            value={seminar.slotsAvailable}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 rounded-lg"
            required
          />
        </div>

        <div className="col-span-1 sm:col-span-2 text-center">
          <button type="submit" className="btn btn-primary w-full sm:w-1/4 py-2 px-4 rounded-lg text-white">
            Update Seminar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSeminar;
