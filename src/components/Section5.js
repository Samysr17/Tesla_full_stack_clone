import React from 'react'
import Fade from 'react-reveal/Fade'


function Section5() {
  return (
    <div  className="section5 bg-no-repeat h-screen w-screen font-sans bg-cover bg-center flex-col">
      <div className='p-[15vh] text-center '>
     <Fade bottom>
    <h1 className="md:text-5xl text-3xl ">Accessories</h1>  
    </Fade>
    </div>
    <div className="text-center items-center flex  flex-col mt-[60%] md:mt-[25%] md:flex-row md:text-center md:space-x-4 ">
    <Fade bottom>
    <button className=" md:ml-[40%] sm:w-[20%] w-[30%] p-3 bg-transparent border-4 border-black md:w-46 rounded-2xl hover:bg-black hover:text-white">Order Now</button>
    </Fade>
    </div>
    </div>
   
  
  )
}

export default Section5