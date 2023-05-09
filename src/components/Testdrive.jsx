import React from 'react'
import video_1 from './video_1.webm'
import Fade from 'react-reveal/Fade'

function Testdrive(){
  return (
    <div className="w-full h-screen relative">
     <video className="h-full w-full object-cover" src={video_1} autoPlay loop muted/>
    
    <div className="flex flex-col text-white absolute w-full h-screen top-0 text-center mt-[30%]  md:mt-[8%] p-2">
       <Fade bottom><h1 className="text-3xl md:text-5xl font-bold">Experience Tesla</h1>
        <p className="text-sm md:text-base mt-2">Schedule a Demo drive today</p>
        </Fade> 
        <div className="mt-[440px]">
       <Fade bottom><button className="p-2 bg-transparent border-white hover:bg-white hover:text-black  border-4 font-semibold w-80 rounded-lg ">Demo Drive</button></Fade> 
    </div>
    </div>
    
    </div>
  
  )
}

export default Testdrive