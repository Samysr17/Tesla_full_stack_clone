import React from 'react'
import Fade from 'react-reveal/Fade'


function Section3 () {
  return (
    <div  className="section3 bg-no-repeat h-screen w-screen font-sans bg-cover bg-center flex-col">
      <div className='p-[15vh] text-center '>
      <Fade bootom>
      <h1 className="md:text-5xl text-3xl ">Solar Panels</h1>  
    <p className=" mt-4 md:text-sm ">Lowest Cost solar Panels in America</p>
    </Fade>
    </div>
    <div className="text-center items-center flex  flex-col mt-[30%] md:mt-[20%]  md:flex-row md:text-center md:space-x-4 ">
    <Fade bootom>
    <button className=" md:ml-[20%] sm:w-[30%] w-[80%] p-3 bg-slate-800  text-white   md:w-46 rounded-2xl">Order Now</button>
    <button className=" p-3 bg-slate-300   sm:w-[30%] w-[80%] mt-4 md:mt-0 md:w-46 rounded-2xl">Demo Drive</button>
    </Fade>
    </div>
    </div>
   
  
  )
}

export default Section3