import React from 'react'
import { useState } from 'react'
import logo from './images/logopng.png'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'


function Header(){
  // const [color,setcolor]=useState[false]
  // const changecolor=()=>{
  //   if(window.scrollY>90){
  //     setcolor(true)
  //   }else{
  //     setcolor(false)
  //   }
  // }
  // window.addEventListener('scroll',changecolor)
const[nav,setnav]=useState(false);
const handlenav=()=>{
setnav(!nav)
}
  
  return (
    <div>
    <div className="flex absolute justify-between items-center w-full z-10 h-20 ">
        <div className="Name text-white text-5xl ml-2">
             <img src={logo} alt="" className="w-20"/>
        </div>
        <div className='hidden md:flex cursor-pointer' >
          <ul className=" links flex text-white  ">
            <li className="p-4 hover:underline">Model S</li>
            <li className=" p-4 hover:underline">Model X</li>
            <li className="p-4 hover:underline">Model X</li>
            <li className="p-4 hover:underline">Model X</li>
            <li className="p-4 hover:underline">Model S</li>
            <li className=" p-4 hover:underline">Model X</li>
          </ul>
        </div>
        <div className=' contact hidden md:flex mr-6 text-white hover:bg-black hover:text-blue-500 cursor-pointer '>
          <p className="mr-4">Shop</p>
          <p className="mr-4">Account</p>
          <p  className="mr-4">Menu</p>
        </div>
        <div onClick={handlenav} className="md:hidden mr-4 z-10">
           {nav ? <AiOutlineClose size={24} color='black'/>:<HiOutlineMenuAlt4 size={24} color='white'/>}
        </div>
        <div onClick={handlenav} className={nav?"right-0 top-0 absolute bg-white text-blue-500 w-[55%] md:w-[15%] px-4 py-7 flex flex-col h-screen  ml-0":"absolute left-[-100%]"}>
          <ul className="mobile space-y-4">
            <li className="hover:underline">Tesla</li>
            <li className="hover:underline">Tesla</li>
            <li className="hover:underline">Tesla</li>
            <li className="hover:underline">Tesla</li>
            <li className="hover:underline">Tesla</li>
            <li className="hover:underline">Tesla</li>
            <li className="hover:underline">Tesla</li>
            <li className="hover:underline">Tesla</li>
            
          </ul>
          
        </div>
    </div>
    </div>
  )
}

export default Header




