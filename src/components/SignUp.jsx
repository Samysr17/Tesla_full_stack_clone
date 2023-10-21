import React from 'react'
import logo1 from './images/telsaw.png'
import { useState } from 'react'
// import { UserAuth_1} from '../context/Authi_email_context'
const SignUp = () => {
    // const [email,setemail]=useState('');
    // const [password,setpassword]=useState('');
    // const [error,seterror]=useState('');
    // const { CreateUser }=UserAuth_1();
    // const handleSubmit=async(e)=>{
    //    e.preventDefault();
    //    seterror('');
    //    try{
    //       await CreateUser(email,password)
    //    }catch(e){
    //      seterror(e.message);
    //      console.log("HI");
    //      console.log(e.message);
    //    }
    // }
    
  return (
    <div>
        <div class="flex justify-between mt-4 ml-4">
       <img src={logo1} alt="" size={10} className="w-32 ml-4 " />
       </div>
       <form >
       <div className="flex flex-col items-center justify-between">
        <div className="flex justify-between">
        <div className="mt-24 text-4xl ml-0" >Sign Up </div>
        </div>
        {/* <div className="mt-12">Name</div>
        <div><input placeholder=''type='text' className="p-3 bg-gray-200 border-2 border-gray-400 w-60 " ></input></div> */}
        <div  className="mt-12">Email</div>
        <div><input placeholder=''type='text' className="p-3 bg-gray-200 border-2 border-gray-400 w-60 " ></input></div>
        <div  className="mt-4">Password</div>
        <div><input placeholder=''type='text' className="p-3 bg-gray-200 border-2 border-gray-400 w-60 " ></input></div>
        <button   className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Sign Up
        </button>
        </div>
        </form>
        <div className="flex justify-center mt-[40%] md:mt-[18%] md:space-x-12 space-x-4">
         <div>Tesla @c 2023</div>
         <div>Privacy & Legal</div>
         <div>Contact</div>
        </div>
    </div>
  )
}


export default SignUp