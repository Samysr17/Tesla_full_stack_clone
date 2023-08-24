import React from 'react'
import Fade from 'react-reveal/Fade'


function Section5() {
  return (
    <div  className="section5 bg-no-repeat h-screen w-screen font-sans bg-cover bg-center flex-col">
      <div className='p-[15vh] text-center flex justify-center '>
     <Fade bottom>
    <h1 className="md:text-5xl text-3xl hover:ease-in duration-300 hover:text-4xl cursor-pointer ">Accessories</h1>  
    </Fade>
    </div>
    <div className="flex justify-center text-center mt-[50%] items-center  md:mt-[25%]">
    <Fade bottom>
    <button className="   w-[40%] hover:w-[60%]  ease-in duration-300 p-3 bg-transparent border-4 border-black md:w-46 rounded-2xl hover:bg-black hover:text-white">Order Now</button>
    </Fade>
    </div>
    </div>
   
  
  )
}

export default Section5