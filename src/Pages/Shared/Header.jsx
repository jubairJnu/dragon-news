import React, { useContext } from 'react';
import logo from '../../../src/assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { contextAuth } from '../../providerShare/ProviderAuth';


const Header = () => {
  const { user, logOut } = useContext(contextAuth);
  const handleLogOut= () =>{
    logOut ()
    .then(result=>{})
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className='mb-4 font-family: Poppins, sans-serif;'>
      <Container>
        <div className="text-center">
          <Link to="/"> <img src={logo} alt="" /></Link>
          <p><small>Journalism Without Fear or Favour</small></p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className='d-flex mb-4'>
          <Button variant="danger">Danger</Button>
          <Marquee speed={100} pauseOnHover={true}>
            I can be a React component, multiple React components, or just some text.
          </Marquee>
        </div>

        {/* ***  Naav bar */}
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container >

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="/order">order</Nav.Link>
              </Nav>
              <Nav >
                {user && <Nav.Link href="/profile">Profile</Nav.Link>}
                <Link to="/login">
                  <Button variant="success">Login</Button>
                </Link>
                {user && <span className='user'>{user.email} <Button onClick={handleLogOut} variant='danger'>Log Out</Button> </span>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;