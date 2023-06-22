import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Editors from '../Editor/Editors';

const News = () => {
  const newsDetails = useLoaderData();
  const {_id,title, details, image_url, category_id} = newsDetails;
  return (
    <div>
      <h3>Dragon news</h3>
      <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title> <h5>{title}</h5> </Card.Title>
        <Card.Text>
         <p>{details}</p>
        </Card.Text>
        <Link to= {`/catagory/${category_id}`}>  <Button variant="danger"><FaArrowLeft></FaArrowLeft>All news in this catagory</Button> </Link>
      </Card.Body>
    </Card>
    <Editors></Editors>
    </div>
  );
};

export default News;