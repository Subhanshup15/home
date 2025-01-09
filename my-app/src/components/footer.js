import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/Footer.css';  // Import custom CSS for styling
import logo from '../assets/img/1.svg'; // Replace with the actual path to your image

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <Row>
            <Col xl={4} md={4} className="mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>HOME PUNE</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} className="mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>8855055473</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} className="mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>pardeshi@gmail.com</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="footer-content pt-5 pb-5">
          <Row>
            <Col xl={4} lg={4} className="mb-50">
            <div className="footer-widget">
  <div className="footer-logo">
    <a href="#home" onClick={() => window.location.href = '/'}>  {/* Redirect to Home */}
      <img
        src={logo}
        className="img-fluid"
        alt="logo"
      />
    </a>
  </div>
</div>

            </Col>

            <Col xl={4} lg={4} md={6} className="mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="#Home">Home</a></li>
                  <li><a href="#AboutUs">About</a></li>
                  <li><a href="#ContactForm">Contact</a></li>
                  <li><a href="#">About us</a></li>
                </ul>
              </div>
            </Col>

            <Col xl={4} lg={4} md={6} className="mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Email Address"
                    />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="copyright-area " > 
          <Row>
            <Col xl={6} lg={6} className="text-center">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2018, All Right Reserved{' '}
                  <a href="">Sagar</a>
                </p>
              </div>
            </Col>
            
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
