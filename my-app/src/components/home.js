import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import profileImage from '../assets/img/facebook.svg'; // Replace with your image path

export const Home = () => {
  return (
    <section className="home">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <img
              src={profileImage}
              alt="Profile"
              className="img-fluid"
              style={{ borderRadius: '50%', marginBottom: '20px' }}
            />
          </Col>
          <Col md={8}>
            <h1>Welcome to My Portfolio</h1>
            <p>
              Hi, I’m Subhanshu PArdeshi, a passionate developer and student at Savitribai phule. I specialize in PHP and Codlicnator and have a
              strong interest in creating innovative solutions for real-world
              challenges.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <h2>About Me</h2>
            <p>
              I am currently pursuing my studies at [Your College Name],
              focusing on [Your Major]. I have worked on various projects that
              include [mention a few project topics]. My skills include [list
              your key skills].
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <h2>Projects</h2>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                alt="Project 1"
              />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Description of your project. Highlight the main features or
                  goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                alt="Project 2"
              />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  Description of your project. Highlight the main features or
                  goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                alt="Project 3"
              />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Description of your project. Highlight the main features or
                  goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
