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
  const [user,setuser]=useState({})
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logout=()=>{
    return signOut(auth);
  }
  useEffect(()=>{
    const check=onAuthStateChanged(auth,(currentUser)=>{
      console.log(currentUser)
      // console.log(user.email)
      setuser(currentUser)
    });
    return ()=>{
      check();
    }
  },[])


  return (
    <UserContext.Provider value={{ createUser,user,logout}}>
        {/* pass the function (js element) */}
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};