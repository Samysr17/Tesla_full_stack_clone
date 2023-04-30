import React from 'react'


const Section5 = () => {
  return (
    <div  className="section5 bg-no-repeat h-screen w-screen font-sans bg-cover bg-center flex-col">
      <div className='p-[15vh] text-center '>
    <h1 className="md:text-5xl text-3xl font-semibold">Accessories</h1>  
    <p className="underline mt-4 md:text-xl ">Check Inventory</p>
    </div>
    <div className="text-center items-center flex  flex-col sm:mt-80 mt-72 md:flex-row md:text-center md:space-x-4 ">
    <button className=" md:ml-[40%] sm:w-[20%] w-[30%] p-3 bg-slate-800 text-white  w- md:w-46 rounded-2xl">Order Now</button>
    </div>
    </div>
   
  
  )
}

export default Section5