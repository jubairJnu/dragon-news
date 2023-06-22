import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextAuth } from '../../providerShare/ProviderAuth';

const SignUp = () => {
  const { createUser } = useContext(contextAuth);
  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then(result=>{
        const registeredUser = result.user;
        console.log(registeredUser);
      })
      .catch(error=>{
        console.error(error.message); 
      })
      form.reset();
  }

  return (
    <div className="container">
      <h2 className='text-center'>Please Register!!</h2>
      <form onSubmit={handleSignUp} >
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
        <p><small>Already Have Accout? <Link to="/login" className='text-decoration-none' >Login</Link> </small></p>
      </form>
    </div>
  );
};

export default SignUp;