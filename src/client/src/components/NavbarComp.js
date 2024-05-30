import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.scss';
import SearchPage from './pages/SearchPage';
import Dashboard from './Dashboard';

const NavbarComp = () => {
  return (
    <Navbar variant="" expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">
          <img
            src="https://naimuri.com/dist/images/svg/logo.svg"
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="Naimuri Booking System logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Booking">Manage Bookings</Nav.Link>
            <NavDropdown title="Display Bookings" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/display-bookings">Search/Book</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/BookingPage">Booking Date/Time</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact-us">Contact/help</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;