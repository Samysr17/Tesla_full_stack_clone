import React from 'react'
import { useState} from 'react'
// import logo from './images/logopng.png'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import logo1 from './images/telsaw.png'
import {Link} from "react-router-dom";
import {UserAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import { Addtocart_context } from '../context/addtocart-context';
import { useAuth0 } from "@auth0/auth0-react";



function Header(){

  const {loginWithRedirect,logout,user, isAuthenticated} = useAuth0();
  const[nav,setnav]=useState(false);
  const handlenav=()=>{
  setnav(!nav)
 }
  const[menu,setmenu]=useState(false);
  const handlemenu=()=>{
  setmenu(!menu)
}

  
  return (
    <div>
    <div className="flex fixed justify-between items-center w-full z-10 top-4 h-20 ">
        <div className="Name text-white text-5xl ml-2">
        <Link to="/"><img src={logo1} alt="" size={10} className="w-32 ml-4" /></Link>
        </div>
        <div className='hidden lg:flex cursor-pointer' >
          <ul className=" flex text-gray-400  ">
            <li className="p-4 hover:ease-in duration-300 hover:text-white hover:text-xl  "><Link to="/Model_S ">Model S</Link></li>
            <li className="p-4 hover:ease-in duration-300 hover:text-white hover:text-xl  "><Link to="/Model_X" >Model X</Link></li>
            <li className="p-4 hover:ease-in duration-300 hover:text-white hover:text-xl "><Link to="/Model_Y">Model Y</Link></li>
            <li className="p-4 hover:ease-in duration-300 hover:text-white hover:text-xl "><Link to="/Solar_Panels">Solar Panel</Link></li>
            <li className="p-4 hover:ease-in duration-300 hover:text-white hover:text-xl "><Link to="/Solar_Roofs">Solar Roof</Link></li>
            <li className=" p-4 hover:ease-in duration-300 hover:text-white hover:text-xl "><Link to="/Powerwall">Powerwall</Link></li>
          </ul>
        </div>
        <div className='hidden lg:flex mr-6 text-gray-400 cursor-pointer '>
          {/* <a href='https://shop.tesla.com/'><p className="mr-4  hover:ease-in duration-300 hover:text-white hover:text-xl ">Shop</p></a> */}
          <p className="mr-4  hover:ease-in duration-300 hover:text-white hover:text-xl "></p>
          { isAuthenticated ?(
          <p  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="mr-4  hover:ease-in duration-300 hover:text-white hover:text-xl ">Log Out</p>)
          :(
            <p  onClick={()=>loginWithRedirect()} className="mr-4  hover:ease-in duration-300 hover:text-white hover:text-xl ">Log In</p>
          )
        }
          {isAuthenticated && (
        <div className='flex '>
          <img className='mr-2  h-6' src={user.picture} alt={user.name} />
        <h2 className='mr-4  hover:ease-in duration-300 hover:text-white hover:text-xl'> {user.name} </h2>
        
       </div>)}
          <p className="mr-4  hover:ease-in duration-300 hover:text-white hover:text-xl "><Link to="/addtocart">Cart</Link> ()</p>
          <p  onClick={handlemenu}  className="mr-4  hover:ease-in duration-300 hover:text-white hover:text-xl ">Menu</p>
          <div onClick={handlemenu} className={menu?"right-0 top-0 absolute  backdrop-blur-3xl text-white w-[25%]  px-4 py-7 flex flex-col h-screen  ml-0":"absolute left-[-100%]"}>
          <ul className="mobile  ml-[20%] ">
          <AiOutlineClose size={24} color='white' className='ml-[90%]'/>
          <li className="w-40 mt-12 "><img src={logo1} alt="" size={10} /></li>
            <p className="hover:ease-in duration-300 hover:text-white hover:text-xl  mt-16 "><Link to="/SignIn"> Your Account</Link></p>
            <li className="hover:ease-in duration-300 hover:text-white hover:text-xl  mt-16">Existing Inventory</li>
            <li className="hover:ease-in duration-300 hover:text-white hover:text-xl  mt-4">Used Inventory</li>
            <li className="hover:ease-in duration-300 hover:text-white hover:text-xl  mt-4">Trade-In</li>
            <li className="hover:ease-in duration-300 hover:text-white  hover:text-xl mt-4">Demo Drive</li>
            <li className="hover:ease-in duration-300 hover:text-white hover:text-xl  mt-4">Insurance</li>
            <li className="hover:ease-in duration-300 hover:text-white  hover:text-xl mt-4">Fleet</li>
            <li className="hover:ease-in duration-300 hover:text-white hover:text-xl  mt-4">Cybertruck</li>
            <li className="hover:ease-in duration-300 hover:text-white  hover:text-xl mt-4">Roadster</li>
            <li className="hover:ease-in duration-300 hover:text-white hover:text-xl  mt-4">Trade-In</li>
            <li className="hover:ease-in duration-300 hover:text-white hover:text-xl mt-4">Semi</li>
            <li className="hover:ease-in duration-300 hover:text-white hover:text-xl  mt-4">Insurance</li>
            <li className="hover:ease-in duration-300 hover:text-white hover:text-xl   mt-4">Commercial Energy</li>
            <li className="hover:ease-in duration-300 hover:text-white hover:text-xl  mt-4">Careers</li>  
          </ul>
        </div>
        </div>
        <div onClick={handlenav} className="lg:hidden mr-4 z-10">
           {nav ? <AiOutlineClose size={24} color='white'/>:<HiOutlineMenuAlt4 size={24} color='gray'/>}
        </div>
        <div onClick={handlenav} className={nav?"right-0 top-0 absolute backdrop-blur-3xl ease-in duration:900 text-white w-[55%] px-4 py-7 flex flex-col h-screen  ml-0":"absolute left-[-100%]"}>
          <ul className="mobile ml-[20%]  ">
          <li className="w-20 mt-16 md:w-40 md:mt-16 "><img src={logo1} alt="" size={10}/></li>
          <a href='https://shop.tesla.com/'><p className="mr-4 mt-8">Shop</p></a> 
          <p className="mr-4 mt-4">Account</p>
            <li className="hover:underline mt-4 md:mt-16 ">Existing Inventory</li>
            <li className="hover:underline mt-4">Used Inventory</li>
            <li className="hover:underline mt-4">Trade-In</li>
            <li className="hover:underline mt-4">Demo Drive</li>
            <li className="hover:underline mt-4">Insurance</li>
            <li className="hover:underline mt-4">Fleet</li>
            <li className="hover:underline mt-4">Cybertruck</li>
            <li className="hover:underline mt-4">Roadster</li>
            <li className="hover:underline mt-4">Trade-In</li>
            <li className="hover:underline mt-4">Semi</li>
            <li className="hover:underline mt-4">Insurance</li>
            <li className="hover:underline mt-4">Commercial Energy</li>
            <li className="hover:underline mt-4">Careers</li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Header

















