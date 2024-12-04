import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type safety
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
  });

  return (
    <form
      id="add-seminar-form"
      onSubmit={(e) => handleSubmit(e, onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              required
            />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Venue</span>
          </label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">From</span>
          </label>
          <input
            type="time"
            name="timeFrame.from"
            value={formData.timeFrame.from}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">To</span>
              </label>
              <input
                type="time"
                name="timeFrame.to"
                value={formData.timeFrame.to}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Speaker Name</span>
          </label>
          <input
            type="text"
            name="speaker.name"
            value={formData.speaker.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Speaker LinkedIn</span>
        </label>
        <input
          type="url"
          name="speaker.linkedin"
          value={formData.speaker.linkedin}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
      </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Fee</span>
          </label>
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

        <div className="form-control">
          <label className="label">
            <span className="label-text">Slots Available</span>
          </label>
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
      </div>
    </form>
  );
};

// Define prop types for the component
SeminarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SeminarForm;
