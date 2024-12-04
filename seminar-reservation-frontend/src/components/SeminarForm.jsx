import React from 'react';
import { useForm } from '../hooks/useForm';


const SeminarForm = ({ onSubmit }) => {
  const { 
    formData,
    handleChange,
    handleSubmit,
  } = useForm({
    title: '',
    description: '',
    date: '',
    timeFrame: { from: '', to: '' },
    venue: '',
    speaker: { name: '', linkedin: '' },
    fee: 0,
    slotsAvailable: 0,
  })

  return (
      <form id="add-seminar-form" onSubmit={(e)=> handleSubmit(e, )}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
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
            value={formData.date}
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
              value={formData.timeFrame.from}
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
              value={formData.timeFrame.to}
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
            value={formData.venue}
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
            value={formData.speaker.name}
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
            value={formData.speaker.linkedin}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fee</label>
          <input
            type="number"
            name="fee"
            value={formData.fee}
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
            value={formData.slotsAvailable}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
            min="1"
          />
        </div>
      </form>
  );
};


export default SeminarForm;
