import React from 'react';


import { Col, Container, Row } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header';
import RightNav from '../../Pages/Shared/RightNav/RightNav';
import Footer from '../../Pages/Shared/Footer';
const NewsLayout = () => {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col lg={9}><Outlet /></Col>

          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default NewsLayout;