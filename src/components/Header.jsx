import React from 'react'
import { useState } from 'react'
// import logo from './images/logopng.png'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import logo1 from './images/telsaw.png'


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
const[menu,setmenu]=useState(false);
const handlemenu=()=>{
  setmenu(!menu)
}

  
  return (
    <div>
    <div className="flex fixed justify-between items-center w-full z-10 top-4 h-20 ">
        <div className="Name text-white text-5xl ml-2">
        <img src={logo1} alt="" size={10} className="w-32 ml-8" />
        </div>
        <div className='hidden lg:flex cursor-pointer' >
          <ul className=" flex text-gray-400  ">
            <li className="p-4 ">Model S</li>
            <li className=" p-4 ">Model X</li>
            <li className="p-4 ">Model X</li>
            <li className="p-4">Solar Roof</li>
            <li className="p-4 ">Solar Panel</li>
            <li className=" p-4 ">Powerwall</li>
          </ul>
        </div>
        <div className='hidden lg:flex mr-6 text-gray-400 cursor-pointer '>
          <p className="mr-4">Shop</p>
          <p className="mr-4">Account</p>
          <p onClick={handlemenu}  className="mr-4">Menu</p>
          <div onClick={handlemenu} className={menu?"right-0 top-0 absolute bg-black text-white w-[25%]  px-4 py-7 flex flex-col h-screen  ml-0":"absolute left-[-100%]"}>
          <ul className="mobile  ml-[20%] ">
          <AiOutlineClose size={24} color='white' className='ml-[90%]'/>
          <li className="w-40 mt-12 "><img src={logo1} alt="" size={10} /></li>
            <li className="hover:underline mt-16">Existing Inventory</li>
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
            <li className="hover:underline  mt-4">Commercial Energy</li>
            <li className="hover:underline mt-4">Careers</li>  
          </ul>
        </div>
        </div>
        <div onClick={handlenav} className="lg:hidden mr-4 z-10">
           {nav ? <AiOutlineClose size={24} color='white'/>:<HiOutlineMenuAlt4 size={24} color='gray'/>}
        </div>
        <div onClick={handlenav} className={nav?"right-0 top-0 absolute bg-black text-white w-[55%] px-4 py-7 flex flex-col h-screen backdrop-blur-3xl ml-0":"absolute left-[-100%]"}>
          <ul className="mobile ml-[20%]  ">
          <li className="w-40 mt-16 "><img src={logo1} alt="" size={10}  /></li>
            <li className="hover:underline mt-20">Existing Inventory</li>
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

















