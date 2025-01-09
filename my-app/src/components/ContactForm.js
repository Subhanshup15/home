import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/ContactForm.css';  // Import custom CSS for styling

export const ContactForm = () => {
  return (
    <Container id='ContactForm'>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <Form action="https://your-backend-api-endpoint" method="POST">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" name="message" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    
  );
};

export default ContactForm;
