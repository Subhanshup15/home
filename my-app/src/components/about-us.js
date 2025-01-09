import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../assets/img/2.svg'; // Replace with the actual path to your image

export const AboutUs = () => {
  return (
    <section className="about-us" id='AboutUs'>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={aboutImage}
              alt="About Us"
              className="img-fluid"
              style={{ borderRadius: '8px', background: '#f8f9fa'  }}
            />
          </Col>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              Welcome to our brand! We are dedicated to providing the best
              services and products to our customers. Our journey started with
              a mission to create value, and we’ve been achieving that with
              innovation and commitment.
            </p>
            <p>
              Our team consists of passionate individuals who strive for
              excellence in everything they do. We believe in building
              long-lasting relationships with our customers, partners, and
              community.
            </p>
            <p>
              Thank you for being a part of our story. Together, we can achieve
              greatness!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
