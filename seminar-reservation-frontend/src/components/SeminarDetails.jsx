import React from 'react';
import PropTypes from 'prop-types';

const SeminarDetails = ({ seminar, onBackClick }) => {
  const placeholderImage = "https://via.placeholder.com/00x400";

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <img
          src={seminar.image || placeholderImage}
          alt={seminar.title || 'Seminar Image'}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <h2 className="text-xl font-semibold mb-4">{seminar.description}</h2>
      <p className="text-sm text-gray-500">Date: {new Date(seminar.date).toLocaleDateString()}</p>
      <p><strong>Time:</strong> {seminar.timeFrame.from} - {seminar.timeFrame.to}</p>
      <p><strong>Venue:</strong> {seminar.venue}</p>
      <p><strong>Speaker:</strong> {seminar.speaker.name}</p>
      {seminar.speaker.linkedin && (
        <p>
          <strong>LinkedIn: </strong>
          <a
            href={seminar.speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {seminar.speaker.name}
          </a>
        </p>
      )}
      <p><strong>Fee:</strong> ₱{seminar.fee}</p>
      <p><strong>Slots Available:</strong> {seminar.slotsAvailable}</p>

      <div className="mt-6 text-center">
        <button onClick={onBackClick} className="btn btn-secondary">
          Back to Seminars
        </button>
      </div>
    </div>
  );
};

SeminarDetails.propTypes = {
  seminar: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    timeFrame: PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired,
    venue: PropTypes.string.isRequired,
    speaker: PropTypes.shape({
      name: PropTypes.string.isRequired,
      linkedin: PropTypes.string,
    }).isRequired,
    fee: PropTypes.number.isRequired,
    slotsAvailable: PropTypes.number.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default SeminarDetails;
