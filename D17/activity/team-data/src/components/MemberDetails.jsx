import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

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

export default MemberDetails;
