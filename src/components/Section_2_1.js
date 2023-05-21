import React from 'react'
import Fade from 'react-reveal'
import game from './images/new-interior.jpg'
import foot from './images/Red.jpg'
import con from './images/connected.jpg'
import vdo from './images/video2.webm'

const Section_2_1 = () => {
  return (
    <div>
    <div  className="section_2_1 bg-no-repeat h-screen w-screen font-sans bg-cover bg-center flex-col">
      
    <div className='p-[15vh] text-center '>
      <Fade bottom>
  <h1 className="md:text-5xl text-3xl ">Model S</h1>  
  <p className=" md:text-xl text-sm mt-2 ">Plaid</p>
  </Fade>
  </div>
  <div className="mt-[10%] flex justify-between">
  <Fade bottom>
  <div className='flex flex-col ml-[20%]'>
  <p className="text-white text-2xl ">396mi</p>
  <p className='text-white text-sm ml-[-12px]'>Range (EPA est.)</p>
  </div>
  <div  className='flex flex-col'>
  <p className="text-white text-2xl">1.99s</p>
  <p className='text-white text-sm '>0-60 mph*</p>
  </div>
  <div  className='flex flex-col mr-[20%] md:mr-0'>
  <p className="text-white text-2xl ">200mph</p>
  <p className='text-white text-sm ml-[6px]'>Top Speed</p>
  </div>
  <div  className='mr-[20%] hidden md:flex md:flex-col'>
  <p className="text-white text-2xl ">1020 hp</p>
  <p className='text-white text-sm ml-[10px]'>Peak Power</p>
  </div>
  </Fade>
  </div>
  <div className="text-center items-center flex  flex-col mt-[2%] md:flex-row md:text-center md:space-x-4 ">
    <Fade bottom>
    <button className=" md:ml-[20%] sm:w-[30%] w-[50%] p-3 bg-transparent border-2 border-white text-white rounded-md">Order Now</button>
    <button className=" p-3 bg-white text-black  sm:w-[30%] w-[50%] mt-4 md:mt-0  rounded-md opacity-5">Demo Drive</button>
    </Fade>
  </div>
  </div>
  <div className="bg-black w-screen h-[400px] text-white flex justify-center text-center ">
    <Fade bottom><div className="mt-[10%] text-3xl">Interior of the Future</div></Fade>
  </div>
  <div>
    <img className="w-screen h-screen" src={game} alt=''/>
  </div>
  <div>
    <video className='w-full h-full ' src={vdo}  autoPlay muted loop/>
  </div>
  <div className="flex flex-col bg-black text-white h-[40%]">
  <Fade bottom> <h1 className ="text-xl ml-[10%] mt-16 ">Cinematic Experience</h1>
<p className="text-sm ml-[10%] mt-8 max-w-[80%] mb-[100px]">A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
</Fade>
  </div>

  <div>
    <img className="w-screen h-screen" src={con} alt=''/>
  </div>
  <div>
    
  </div>
  <div className="bg-black text-white flex-col">
  <Fade bottom>
  <p className="pt-4 text-xl ml-[10%]">Plaid</p>
  <h1 className="mt-4 font-semibold text-2xl ml-[10%]">Beyond Ludicrous</h1>
  <p className='max-w-[60%] pt-4 ml-[10%] text-sm'>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.</p>
  </Fade>
  <Fade bottom>
  <div className="flex  max-w-[70%] md:max-w-[20%] justify-between ml-[10%] mt-12 ">
  <button className='p-2 bg-transparent border-2 border-white rounded-md'>Order Now</button>
  <button className='p-2 bg-white text-black border-2  border-white rounded-md '>Compare Models</button>
  </div>
  </Fade>
  </div>
  <div>
    <img className="w-screen h-screen" src={foot} alt=''/>
  </div>
  </div>
  )
}

export default Section_2_1