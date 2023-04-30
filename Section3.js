import React from 'react'


const Section3 = () => {
  return (
    <div  className="section3 bg-no-repeat h-screen w-screen font-sans bg-cover bg-center flex-col">
      <div className='p-[15vh] text-center '>
    <h1 className="md:text-5xl text-3xl font-semibold">MODEL X</h1>  
    <p className="underline mt-4 md:text-xl ">Check Inventory</p>
    </div>
    <div className="text-center items-center flex  flex-col sm:mt-80 mt-72 md:flex-row md:text-center md:space-x-4 ">
    <button className=" md:ml-[20%] sm:w-[30%] w-[80%] p-3 bg-slate-800 text-white  w- md:w-46 rounded-2xl">Order Now</button>
    <button className=" p-3 bg-slate-300   sm:w-[30%] w-[80%] mt-4 md:mt-0 md:w-46 rounded-2xl">Demo Drive</button>
    </div>
    </div>
   
  
  )
}

export default Section3