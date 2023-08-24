import React from 'react'
import { useState} from 'react'//useffect
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
        <div className="flex justify-between">
        <div className="mt-24 text-4xl ml-0" >Sign In</div>
        </div>
        <div className="mt-12">Email</div>
        <div><input placeholder=''type='text' className="p-3 bg-gray-200 border-2 border-gray-400 w-60 " ></input></div>
        <div className="mt-8">_________Or__________</div>
        <div className="text-red-200 mt-16">
              <GoogleButton onClick={handlegoogle}/>
        </div>
        </div>
        <div className="flex justify-center mt-[40%] md:mt-[18%] md:space-x-12 space-x-4">
         <div>Tesla @c 2023</div>
         <div>Privacy & Legal</div>
         <div>Contact</div>
        </div>
    </div>
  )
}

export default Signin










