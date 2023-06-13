import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import bg from '../../../assets/bg.png'
import QZone from '../QZone/QZone';

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className='text-primary mb-2' variant="light" size="sm"> <FaGoogle /> Login with google   </Button>
      <Button className='text-primary mb-2' variant="light" size="sm"> <FaGithub /> Login with github   </Button>
      <div>
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className='p-3' ><FaFacebook />  facebook</ListGroup.Item>
          <ListGroup.Item className='p-3'><FaTwitter /> twitter</ListGroup.Item>
          <ListGroup.Item className='p-3'><FaInstagram /> instagram</ListGroup.Item>
        </ListGroup>
        <QZone></QZone>
        <div className='mt-3 position-relative'>
         
          <img className='position-absolute' src={bg} alt="" />
         <div className='position-absolute text-white text-center p-5'>
         <h4 className='lh-base mb-3'>Create an Amazing Newspaper</h4>
          <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <Button className='mt-5' variant="danger">Learn More</Button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;