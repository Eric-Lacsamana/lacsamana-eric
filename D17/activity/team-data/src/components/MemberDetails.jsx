import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Import PropTypes

function MemberDetails({ data }) {
  return (
    <div className="member-details d-flex justify-content-center align-items-center mt-5">
      <Card className="w-75 p-4 shadow-lg">
        <Card.Body>
          <h2 className="text-center mb-4">About {data.name}</h2>

          {/* Bio Section */}
          <div className="bio-section">
            <p>{data.bio}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

MemberDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,  
    bio: PropTypes.string.isRequired,  
  }).isRequired,
};

export default MemberDetails;
