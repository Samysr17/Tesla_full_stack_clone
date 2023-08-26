import React from 'react'
import video_3 from './panel_1.webm'
import Fade from 'react-reveal/Fade'

const Section_1_1 = () => {
  return (
    <div>
    <div className="w-full h-screen relative">
    <video className="h-full w-full object-cover" src={video_3} autoPlay loop muted/>
   
   <div className="flex flex-col text-white absolute w-full h-screen top-0 text-center mt-[30%] md:mt-[8%] p-2">
      <Fade bottom><h1 className="text-3xl md:text-5xl font-bold hover:ease-in duration-300 hover:text-4xl cursor-pointer">Solar Panel</h1>
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
   <div className='bg-black h-screen w-screen bg-cover bg-center'>
     <div className=' p-[20vh] text-center items-center flex flex-col'>
        <h1 className='text-white text-3xl'>Transform Your Roof</h1>
        <button className="bg-transparent mt-8 border-white border-4 hover:ease-in duration-300 hover:w-[35%] w-100vh  md:w-[50%] p-2  text-white hover:bg-white hover:text-black  rounded-sm">Order Now</button>
        <button className="bg-gray-600 opacity-75 hover:opacity-100 mt-8 text-white hover:ease-in duration-300 hover:w-[35%] border-4 border-gray-600  md:w-[50%] p-2   rounded-sm">Schedule a Virtual Consultation</button>
        <span className="text-sm underline text-white mt-4 cursor-pointer hover:text-xl hover:ease-in duration-300 ">Get Updates</span>
      </div>
      <div className="sm:flex mt-[10%] justify-center hidden text-white space-x-4 ">
        <div>Tesla © 2023</div>
        <div>Privacy & Legal</div>
        <div>Vehicle Recalls</div>
        <div>Contact</div>
        <div className="">Location</div>
      </div>
    </div>
 </div>
  )
}

export default Section_1_1