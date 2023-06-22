import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contextAuth } from '../../providerShare/ProviderAuth';

const Login = () => {
  const {logIn}= useContext(contextAuth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password= form.password.value;
    // console.log(email, password);

    logIn(email,password)
    .then(result=>{
      const loggedUser= result.user;
      console.log(loggedUser);
    })
    .catch(error=>
      console.log(error.message));
      form.reset();
      navigate(from, {replace:true} );
  }
  return (
    <div className="container">
      <h2 className='text-center'>Login</h2>
      <form onSubmit={handleLogin} >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name='email'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name='password'
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <p><small>New? <Link to="/signup" className='text-decoration-none' >Sign Up</Link> </small></p>
      </form>
    </div>
  );
};

export default Login;