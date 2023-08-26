import React from 'react'
import Fade from 'react-reveal'

const Section_4_1 = () => {
  return (
    <div>
    <div  className="section_4_1 bg-no-repeat h-screen w-screen font-sans bg-cover bg-center flex-col">
      <div className='p-[15vh] text-center '>
        <Fade bottom>
    <h1 className="md:text-5xl hover:ease-in duration-300 text-white hover:text-4xl cursor-pointer text-3xl ">Solar Roof</h1>  
    <p className=" mt-4 md:text-sm text-white ">Produce clean energy from your roof</p>
    </Fade>
    </div>
    <div className="text-center items-center flex flex-col  mt-[35%] md:mt-[20%] md:flex-row md:text-center ">
    <Fade bottom>
    <button className=" md:ml-[10%] md:mr-[2%] bg-transparent border-black border-4 hover:ease-in duration-300 hover:w-[70%]    w-[50%] p-3 bg-slate-800 hover:text-white hover:bg-black  rounded-2xl">Order Now</button>
    <button className=" p-3 bg-transparent border-white text-white hover:bg-white hover:ease-in duration-300 hover:w-[70%]  hover:text-black border-4 md:mr-[10%] opacity-25  md:ml-[2%]  w-[50%] mt-4 md:mt-0  rounded-2xl">Demo Drive</button>
    </Fade> 
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

export default Section_4_1