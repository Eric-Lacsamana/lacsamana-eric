import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { Link, Outlet, useParams } from 'react-router-dom';

const team = [
  { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', role: 'Backend Developer', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Davis', role: 'Designer', email: 'charlie@example.com' },
];

function Teams() {
  const { id } = useParams();
  const activeMemberId = id ? parseInt(id) : null;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Development Team</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 d-flex justify-content-center">
        {team.map((member) => (
          <Col key={member.id} className="d-flex justify-content-center">
            <Link to={`/teams/${member.id}`} style={{ textDecoration: 'none' }}>
              <Card
                className={`team-card ${activeMemberId === member.id ? 'active' : ''}`}
              >
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <FaUser size={80} color="#17a2b8" />
                  <Card.Title className="mt-3">{member.name}</Card.Title>
                  <Card.Text>{member.role}</Card.Text>
                  <Card.Text className="text-muted">
                    <FaEnvelope size={18} className="me-2" />
                    <a href={`mailto:${member.email}`} 
                       style={{ 
                         textDecoration: 'none', 
                         color: '#17a2b8', 
                       }}
                       onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                       onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >
                      {member.email}
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Outlet />
    </div>
  );
}

export default Teams;
