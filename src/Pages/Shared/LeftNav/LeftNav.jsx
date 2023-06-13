import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link  className='text-decoration-none text-muted'> {catagory.name} </Link>
          </p>)
        }
      </div>
    </div>
  );
};

export default LeftNav;