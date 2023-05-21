import React from 'react'
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
  return (
    <div>
        <div className="text-red-200">
              <p>Manchester uNited</p>
              <GoogleButton onClick={handlegoogle}/>
        </div>
    </div>
  )
}

export default Signin