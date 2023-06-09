import React from 'react'
import Fade from 'react-reveal/Fade'


function Section4() {
  return (
    <div  className="section4 bg-no-repeat h-screen w-screen font-sans bg-cover bg-center flex-col">
      <div className='p-[15vh] text-center '>
        <Fade bottom>
    <h1 className="md:text-5xl text-3xl ">Solar Roof</h1>  
    <p className=" mt-4 md:text-sm ">Produce clean energy from your roof</p>
    </Fade>
    </div>
    <div className="text-center items-center flex  flex-col sm:mt-80 mt-[30%] md:mt-[20%] md:flex-row md:text-center md:space-x-4 ">
    <Fade bottom>
    <button className=" md:ml-[20%] sm:w-[30%] w-[80%] p-3 bg-slate-800 text-white   md:w-46 rounded-2xl">Order Now</button>
    <button className=" p-3 bg-slate-300   sm:w-[30%] w-[80%] mt-4 md:mt-0 md:w-46 rounded-2xl">Demo Drive</button>
    </Fade>
    </div>
    </div>
   
  
  )
}

export default Section4