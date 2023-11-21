import React, { useState } from 'react'
import logo1 from './images/telsaw.png'
import {Link} from 'react-router-dom'

const Admin_login = () => {
  // const {signin}=userAuth()
  // const [ad_email,setad_email]=useState('');
  // const [ad_password,setad_password]=useState('');
  // const [error,set_error]=useState('');
  // const adm_login=async()=>{
  //   //userauth from firebase
  //   try{
  //     await signIN(ad_email,ad_password)
  //     navigate('/')
  //   }catch(e){
  //     set_error('')
  //   } 
  // }
  return (
    <div className="flex bg-black h-screen w-screen ">
        <div>
       <div class="flex justify-center mt-4 ml-4">
       <img src={logo1} alt="" size={10} className="w-32 ml-4 " />
       </div>
       <div className="flex flex-col items-center justify-center">
       <div className="flex justify-center text-3xl text-white bg-black">Administaration Login</div>
        <div className="flex justify-between">
        <div className="mt-24 text-4xl ml-0" >Sign In</div>
        </div>
        <div className="mt-12 text-white">Email</div>
        <div><input  placeholder=''type='text' className="p-3 bg-gray-200 border-2 border-gray-400 w-60 " ></input></div>
        <div className="mt-4 text-white">Password</div>
        <div><input  placeholder=''type='text' className="p-3 bg-gray-200 border-2 border-gray-400 w-60 " ></input></div>
        <button className="mt-8 bg-blue-500 text-white p-2 w-60"><Link to="/SignUp">Sign In</Link></button>
        </div>
        <div className="flex justify-center mt-[40%] md:mt-[18%] md:space-x-12 space-x-4">
         <div>Tesla @c 2023</div>
         <div>Privacy & Legal</div>
         <div>Contact</div>
        </div>
    </div>
    </div>
  )
}

export default Admin_login