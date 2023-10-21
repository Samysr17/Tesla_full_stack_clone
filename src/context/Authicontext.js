import {useContext,createContext} from 'react'
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged} from "firebase/auth";
import {auth} from '../firebase'

//We need to create a new authcontext for our email and password as there can only one context provider in an elemnt

const AuthContext = createContext();


export const AuthContextProvider=({children})=>{
    const googleSignin=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider);
    };
    return(
        <AuthContext.Provider value={{googleSignin}}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth=()=>{
    return useContext(AuthContext)
}