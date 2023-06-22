import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Header />
     
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>

          <Col lg={6}><Outlet/></Col>

          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
};

export default Main;