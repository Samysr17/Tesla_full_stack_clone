import React from 'react'
import { createContext } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebase'
import { useContext } from 'react';
const UserContext= createContext();
export const Authi_email_contextProvider = ({children}) => {
        const CreateUser = (email,password) =>{
            return createUserWithEmailAndPassword(auth,email,password);
        };
    
  return (
    <UserContext.Provider value={ CreateUser }>
        {children}
    </UserContext.Provider>
  )
};

export const UserAuth_1=()=>{
    return useContext(UserContext);
}