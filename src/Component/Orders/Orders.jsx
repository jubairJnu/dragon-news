import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate= useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  return (
    <div>
      <h3>Your order is comming...</h3>
    </div>
  );
};

export default Orders;