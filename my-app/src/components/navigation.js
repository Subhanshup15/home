import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/2.svg';
import navicon from '../assets/img/2.svg';

export const CustomNavbar = () => {
  const [active, setActive] = useState('home');
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={scroll ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" active={active === 'home'} onClick={() => setActive('home')}>
              Home
            </Nav.Link>
            <Nav.Link href="#AboutUs" active={active === 'about'}>
              About ME
            </Nav.Link>
            <Nav.Link href="#ContactForm" active={active === 'contact'}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
