import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { Card, Image } from 'react-bootstrap';

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/catagories')
      .then(res => res.json())
      .then(data => setCatagories(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h4>All Catagory</h4>
      <div>
        {
          catagories.map(catagory => <p
            key={catagory.id}>
            <Link to={`/catagory/${catagory.id}`}  className='text-decoration-none text-muted'> {catagory.name} </Link>
          </p>)
        }
      </div>
      <div>
      
      <Card className='mb-3' style={{width:"200px"}}>
      <Card.Img className='text-center' style={{width: "100%"}} variant="top" src={first} />
      <Card.Body>      
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
       
      </Card.Body>
    </Card>
      <Card className='mb-3' style={{width:"200px"}}>
      <Card.Img className='text-center' style={{width: "100%"}} variant="top" src={second} />
      <Card.Body>      
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
       
      </Card.Body>
    </Card>
      <Card className='mb-3' style={{width:"200px"}}>
      <Card.Img className='text-center' style={{width: "100%"}} variant="top" src={third} />
      <Card.Body>      
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
    </div>
  );
};

export default LeftNav;