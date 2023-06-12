import React from 'react';
import logo from '../../../src/assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';


const Header = () => {
  return (
    <div className='font-family: Poppins, sans-serif;'>
      <Container>
        <div className="text-center">
          <img src={logo} alt="" />
          <p><small>Journalism Without Fear or Favour</small></p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className='d-flex'>
          <Button variant="danger">Danger</Button>
          <Marquee speed={100} pauseOnHover={true}>
            I can be a React component, multiple React components, or just some text.
          </Marquee>
        </div>

        {/* ***  Naav bar */}
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
           
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="success">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;