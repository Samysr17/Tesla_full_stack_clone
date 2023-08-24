import React from 'react'
import Fade from 'react-reveal/Fade'
import video_1 from './video_1.webm'


const Section1 = () => {
  return (
    <div className="w-full h-screen relative">
     <video className="h-full w-full object-cover" src={video_1} autoPlay loop muted/>
    
    <div className="flex flex-col text-white absolute w-full h-screen top-0 text-center mt-[30%] md:mt-[8%] p-2">
       <Fade bottom><h1 className="text-3xl md:text-5xl font-bold">Model 3</h1>
       </Fade> 
       <Fade bottom>
        <p className="text-sm md:text-base ">Schedule a Demo drive today</p>
        </Fade>
        <div className="mt-[30%] md:mt-[20%]">
       <Fade bottom>
        <button className="p-2 bg-transparent border-white hover:bg-white mt-24 md:mt-20 hover:text-black  border-4  font-semibold w-80 rounded-lg ">Demo Drive</button></Fade> 
    </div>
    </div>
  
    </div>
   
  
  )
}

export default Section1