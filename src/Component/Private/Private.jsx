import React from 'react';
import { useContext } from 'react';
import { contextAuth } from '../../providerShare/ProviderAuth';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';
const Private = ({children}) => {
  const {user, loading}= useContext(contextAuth);
  const locatin = useLocation();

  if(loading){
    return  <Spinner animation="grow" variant="info" />
  }

  if(user){
    return children;
  }
  return <Navigate to="/login" state={{from:locatin}} replace ></Navigate>;
};

export default Private;