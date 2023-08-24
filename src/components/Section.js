import React from 'react'
import Fade from 'react-reveal/Fade'


function Section(){
  return (
    <div  className="section bg-no-repeat h-screen w-screen font-sans bg-cover bg-center flex-col">
      
      <div className='p-[15vh] text-center  '>
        <Fade bottom>
    <h1 className="md:text-5xl text-3xl ">Model S</h1>  
    <p className="underline md:text-sm ">Check Inventory</p>
    </Fade>
    </div>
     <div className="text-center items-center flex flex-col  mt-[35%] md:mt-[20%] md:flex-row md:text-center ">
    <Fade bottom>
    <button className=" md:ml-[10%] md:mr-[2%] bg-transparent border-black border-4   w-[50%] p-3 bg-slate-800 hover:text-white hover:bg-black  rounded-2xl">Order Now</button>
    <button className=" p-3 bg-transparent border-white text-white hover:bg-white hover:text-black border-4 md:mr-[10%] opacity-25  md:ml-[2%]  w-[50%] mt-4 md:mt-0  rounded-2xl">Demo Drive</button>
    </Fade> 
    </div>
    </div>
   
  
  )
}

export default Section