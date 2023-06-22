import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
export const contextAuth = createContext(null);

// component.....

const ProviderAuth = ({ children }) => {
  const [user, setUser] = useState(null);
const [loading, setLoading]=useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login firebase
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = ()=>{
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, updateUser => {
      setUser(updateUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    }
  }, [])

  //*** export value  */ 
  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    loading
  }
  return (
    <contextAuth.Provider value={authInfo}>
      {children}
    </contextAuth.Provider>
  );
};

export default ProviderAuth;