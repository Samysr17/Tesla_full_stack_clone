import React from 'react'
import { useState} from 'react'
import logo1 from './images/telsaw.png'
import { UserAuth } from '../context/AuthContext'
import {Link,useNavigate} from 'react-router-dom'
const Signin = () => {
//     const {googleSignin}=UserAuth();
//     const handlegoogle=async()=>{
//      try{
//        await googleSignin();
//      }catch(error){
//         console.log(error);
//      }
//     }
    // const [set,setuser]=useState({});//useffect for context sign out and email functionality....
  const {signin}=UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const handlesignin=async()=>{
    try{
      await signin(email,password);
      navigate('/Admin')
    }catch(e){
      setError('');
      
      console.log(e.message);
    }
    
  }
  return (
    <div>
       <div class="flex justify-between mt-4 ml-4">
       <img src={logo1} alt="" size={10} className="w-32 ml-4 " />
       </div>
       <div className="flex flex-col items-center justify-between">
        <div className="flex justify-between">
        <div className="mt-24 text-4xl ml-0" >Tesla Admin</div>
        <div className="mt-24 text-4xl ml-0" >Sign In</div>
        </div>
        <div className="mt-12">Email</div>
        <div><input onChange={(e)=>setEmail(e.target.value)} placeholder=''type='text' className="p-3 bg-gray-200 border-2 border-gray-400 w-60 " ></input></div>
        <div className="mt-4">Password</div>
        <div><input onChange={(e)=>setPassword(e.target.value)} placeholder=''type='text' className="p-3 bg-gray-200 border-2 border-gray-400 w-60 " ></input></div>
        <button onClick={handlesignin} className="mt-8 bg-blue-500 text-white p-2 w-60">Sign In</button>
        <div className="mt-8">_________Or__________</div>
        <button className="mt-8 bg-blue-500 text-white p-2 w-60"><Link to="/Admin_SignUp">Create Account</Link></button>
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










