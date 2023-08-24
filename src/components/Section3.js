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
    <div className="text-center items-center flex flex-col  mt-[35%] md:mt-[20%] md:flex-row md:text-center ">
    <Fade bottom>
    <button className=" md:ml-[10%] md:mr-[2%] bg-transparent border-black border-4 hover:ease-in duration-300 hover:w-[70%]    w-[50%] p-3 bg-slate-800 hover:text-white hover:bg-black  rounded-2xl">Order Now</button>
    <button className=" p-3 bg-transparent border-white text-white hover:bg-white hover:ease-in duration-300 hover:w-[70%]  hover:text-black border-4 md:mr-[10%] opacity-25  md:ml-[2%]  w-[50%] mt-4 md:mt-0  rounded-2xl">Demo Drive</button>
    </Fade> 
    </div>
    </div>
   
  
  )
}

export default Section3