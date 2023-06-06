import React from 'react'
import { useState,useEffect } from 'react'
import {GoogleButton} from 'react-google-button'
import { UserAuth } from '../context/Authicontext'
const Signin = () => {
    const {googleSignin}=UserAuth();
    const handlegoogle=async()=>{
     try{
       await googleSignin();
     }catch(error){
        console.log(error);
     }
    }
    const [set,setuser]=useState({});//useffect for context sign out and email functionality....
  return (
    <div>
        <div className="text-red-200">
              <GoogleButton onClick={handlegoogle}/>
        </div>
    </div>
  )
}

export default Signin