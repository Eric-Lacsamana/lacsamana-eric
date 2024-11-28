import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaCode, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="home-page">
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center full-height">
          <Col xs={12} md={8} lg={6}>
            <div className="hero-section text-center">
              <h1>Welcome to the DevTeam</h1>
              <div className="team-members-info mt-4">
                <h3>Just Wow!</h3>
              </div>
              <div className="ready-to-meet mt-4">
                <h3>Ready to meet our cool team members?</h3>
                <p>Click below to explore more!</p>
                <Link to="/teams">
                  <Button variant="primary">Explore the Team</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 text-center">
          <Col xs={12}>
            <h2>Meet Our Development Team</h2>
            <p>We are a passionate group of developers working together to build something great!</p>
            <p>Our goal is to create innovative solutions and foster collaboration across teams.</p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12} md={4}>
            <Card className="coding-card">
              <Card.Body className="text-center">
                <FaCode size={60} color="#007bff" />
                <Card.Title>Clean Code</Card.Title>
                <Card.Text>
                  We write clean, maintainable code that drives efficiency and scalability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="coding-card">
              <Card.Body className="text-center">
                <FaLaptopCode size={60} color="#28a745" />
                <Card.Title>Innovative Solutions</Card.Title>
                <Card.Text>
                  We create innovative solutions that push the boundaries of technology.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="coding-card">
              <Card.Body className="text-center">
                <FaGithub size={60} color="#333" />
                <Card.Title>Collaboration</Card.Title>
                <Card.Text>
                  We collaborate and use GitHub for version control and teamwork.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
