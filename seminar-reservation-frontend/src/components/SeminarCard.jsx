import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SeminarCard = ({ 
    data = {
        speaker: {
            linkedin: '' 
        }
    }, 
    onDelete,
}) => {
  return (
    <div className="card bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/admin/seminars/${data._id}`} className="block">
        <figure className="overflow-hidden">
          <img 
            src="https://via.placeholder.com/100" 
            alt="Seminar Thumbnail" 
            className="w-full h-auto" 
          />
        </figure>
      </Link>

      <div className="card-body p-4">
        <h2 className="card-title text-xl font-semibold truncate">{data.title}</h2>
        <p className="text-sm text-gray-700">{data.description}</p>
        <p className="text-sm text-gray-500 mt-2">{new Date(data.date).toLocaleDateString()}</p>

        <div className="mt-4">
          <p><strong>Time:</strong> {data.timeFrame.from} - {data.timeFrame.to}</p>
          <p><strong>Venue:</strong> {data.venue}</p>
          <p><strong>Speaker:</strong> {data.speaker.name}</p>
          {data.speaker.linkedin && (
            <p>
              <strong>LinkedIn: </strong>
              <a href={data.speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                {data.speaker.name}
              </a>
            </p>
          )}
          <p><strong>Fee:</strong> ₱ {data.fee}</p>
          <p><strong>Slots Available:</strong> {data.slotsAvailable}</p>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/admin/seminars/${data._id}/edit`} className="btn btn-primary mr-2">Edit</Link>
          <button 
            onClick={() => onDelete(data._id)} 
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

SeminarCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeFrame: PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    }).isRequired,
    venue: PropTypes.string.isRequired,
    speaker: PropTypes.shape({
      name: PropTypes.string.isRequired,
      linkedin: PropTypes.string
    }).isRequired,
    fee: PropTypes.number.isRequired,
    slotsAvailable: PropTypes.number.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default SeminarCard;
