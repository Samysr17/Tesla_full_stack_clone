import React from 'react'
import { useState,useEffect } from 'react'
import {GoogleButton} from 'react-google-button'
import logo1 from './images/telsaw.png'
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
       <div class="flex justify-between mt-4 ml-4">
       <img src={logo1} alt="" size={10} className="w-32 ml-4 " />
       </div>
       <div className="flex flex-col items-center justify-between">
        <div className="mt-8 text-2xl" >Sign IN</div>
        <div className="mt-4">Email</div>
        <div>_________Or__________</div>
        <div><input placeholder=''type='text' className="p-3 bg-gray-200 border-2 border-gray-400 w-60 " ></input></div>
        <div className="text-red-200 mt-8">
              <GoogleButton onClick={handlegoogle}/>
        </div>
        </div>
    </div>
  )
}

export default Signin