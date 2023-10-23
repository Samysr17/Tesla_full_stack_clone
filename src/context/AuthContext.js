import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  return (
    <UserContext.Provider value={{ createUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};