import React from 'react'
import Fade from 'react-reveal'
import game from './images/new-interior.jpg'
import con from './images/connected.jpg'
import vdo from './images/video2.webm'
import m_1 from './vdo_3.webm'
import {Link} from "react-router-dom";

const Section_0_1 = () => {
  return (
    <div>
    <div className="w-full h-screen relative">
    <video className="h-full w-full object-cover" src={m_1} autoPlay loop muted/>
   
   <div className="flex flex-col text-white absolute w-full h-screen top-0 text-center mt-[30%] md:mt-[8%] p-2">
      <Fade bottom><h1 className="text-3xl md:text-5xl font-bold hover:ease-in duration-300 hover:text-4xl cursor-pointer">Model 3</h1>
      </Fade> 
      <Fade bottom>
       <p className="text-sm md:text-base  ">Schedule a Demo drive today</p>
       </Fade>
       <div className="mt-[30%] md:mt-[20%]">
      <Fade bottom>
       <button className="p-2 bg-transparent hover:ease-in duration-300 hover:w-[40%]  border-white hover:bg-white mt-24 md:mt-20 hover:text-black  border-4  font-semibold w-80 rounded-lg ">Demo Drive</button></Fade> 
   </div>
   </div>
 
   </div>
   <div className="bg-black w-screen h-[400px] text-white flex justify-center text-center ">
   <Fade bottom><div className="mt-[10%] text-3xl cursor-pointer hover:ease-in duration-300 hover:text-2xl">Interior of the Future</div></Fade>
 </div>
 <div>
   <img className="w-screen h-screen" src={game} alt=''/>
 </div>
 <div>
   <video className='w-full h-full ' src={vdo}  autoPlay muted loop/>
 </div>
 <div className="flex flex-col bg-black text-white h-[40%]">
 <Fade bottom> <h1 className ="text-xl ml-[10%] mt-16  cursor-pointer hover:ease-in duration-300 hover:text-2xl ">Cinematic Experience</h1>
<p className="text-sm ml-[10%] mt-8 max-w-[80%] mb-[100px] ">A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
</Fade>
 </div>

 <div>
   <img className="w-screen h-screen" src={con} alt=''/>
 </div>
 <div>
   
 </div>
 <div className="bg-black text-white flex-col">
 <Fade bottom>
 <p className="pt-4 text-xl ml-[10%]  cursor-pointer hover:ease-in duration-300 hover:text-2xl ">Plaid</p>
 <h1 className="mt-4 font-semibold text-2xl ml-[10%]  cursor-pointer hover:ease-in duration-300 hover:text-2xl">Beyond Ludicrous</h1>
 <p className='max-w-[60%] pt-4 ml-[10%] text-sm'>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.</p>
 </Fade>
 <Fade bottom>
 <div className="flex  max-w-[70%] md:max-w-[20%] justify-between ml-[10%] mt-12 ">
 <button className='p-2 bg-transparent border-2 border-white rounded-md'>Order Now</button>
 <button className='p-2 bg-white text-black border-2  border-white rounded-md '>Compare Models</button>
 </div>
 </Fade>
 </div>
 <div className='bg-black h-screen w-screen bg-cover bg-center'>
     <div className=' p-[20vh] text-center items-center flex flex-col'>
        <h1 className='text-white text-3xl'>Transform Your Roof</h1>
        <button className="bg-transparent mt-8 border-white border-4 hover:ease-in duration-300 hover:w-[35%] w-100vh  md:w-[50%] p-2  text-white hover:bg-white hover:text-black  rounded-sm"><Link to="/addtocart" >Order Now</Link></button>
        <button className="bg-gray-600 opacity-75 hover:opacity-100 mt-8 text-white hover:ease-in duration-300 hover:w-[35%] border-4 border-gray-600  md:w-[50%] p-2   rounded-sm">Schedule a Virtual Consultation</button>
        <span className="text-sm underline text-white mt-4 cursor-pointer hover:text-xl hover:ease-in duration-300 ">Get Updates</span>
      </div>
      <div className="sm:flex mt-[10%] justify-center hidden text-white space-x-4 ">
        <div className="ease in duration-300 hover:text-xl cursor-pointer">Tesla © 2023</div>
        <div className="ease in duration-300 hover:text-xl cursor-pointer">Privacy & Legal</div>
        <div className="ease in duration-300 hover:text-xl cursor-pointer">Vehicle Recalls</div>
        <div className="ease in duration-300 hover:text-xl cursor-pointer">Contact</div>
        <div className="ease in duration-300 hover:text-xl cursor-pointer">Location</div>
      </div>
    </div>

 </div>
  )
}

export default Section_0_1