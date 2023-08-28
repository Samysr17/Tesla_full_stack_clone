import React from 'react'
import video_3 from './panel_1.webm'
import Fade from 'react-reveal/Fade'
import panel_img from './panel_img.avif'

const Section_1_1 = () => {
  return (
    <div>
    <div className="w-full h-screen relative">
    <video className="h-full w-full object-cover" src={video_3} autoPlay loop muted/>
   
   <div className="flex flex-col text-white absolute w-full h-screen top-0 text-center mt-[30%] md:mt-[8%] p-2">
      <Fade bottom><h1 className="text-3xl md:text-5xl font-bold hover:ease-in duration-300 hover:text-4xl cursor-pointer">Solar Panel</h1>
      </Fade> 
      <Fade bottom>
       <p className="text-sm md:text-base  ">Schedule a Demo drive today</p>
       </Fade>
       <div className="mt-[30%] md:mt-[20%]">
      <Fade bottom>
       <button className="p-2 bg-transparent hover:ease-in duration-300 hover:w-[40%]  border-white hover:bg-white mt-24 md:mt-20 hover:text-black  border-4  font-semibold w-80 rounded-lg ">Demo Drive</button></Fade> 
   </div>
   </div>
 
   </div>
   <div className="bg-black text-white h-screen w-screen flex-col">
 <Fade bottom>
 <p className="pt-4 text-xl ml-[10%] hover:ease-in duration-300 hover:text-2xl cursor-pointer"></p>
 <h1 className="mt-4 font-semibold text-2xl ml-[10%]  hover:ease-in duration-300 hover:text-xl cursor-pointer">Clean Aesthetic</h1>
 <p className='max-w-[40%] pt-4 ml-[10%] text-sm'>All-black panels and proprietary hardware keep the array close to your roof — no bulky racks, no large gaps.</p>
 <div className="flex justify-center">
   <img className="w-[80%] h-[40vh] md:w-[50%] md:h-[60vh] " src={panel_img} alt=''/>
 </div>
 <div className='md:hidden flex-col '>
    <div className="flex flex-col">
      <h1 className="">Concealed Edge</h1>
      <span className="">A front skirt helps hide hardware and the panel edge.</span>
    </div>
    <div className="flex flex-col">
      < h1 className="">No Visible Grid</h1>
      <span className="">Panels and hardware are all-black for a uniform, monochromatic look.</span>
    </div>
    <div className="flex flex-col">
       <h1 className="">Low-Profile</h1>
      <span className="">Rail-free mounting keeps panels close to your roof.</span>
    </div>
 </div>
 <div className="flex justify-center mt-4">
 <div className='md:flex md:justify-between md:w-[50%]'>
    <div className="flex flex-col w-[33%]">
      <h1 className="">Concealed Edge</h1>
      <span className="mt-4">A front skirt helps hide hardware and the panel edge.</span>
    </div>
    <div className="flex flex-col ml-[2%] w-[33%]">
      < h1 className="">No Visible Grid</h1>
      <span className="mt-4">Panels and hardware are all-black for a uniform, monochromatic look.</span>
    </div>
    <div className="flex flex-col ml-[2%] w-[33%]">
       <h1 className="">Low-Profile</h1>
      <span className="mt-4">Rail-free mounting keeps panels close to your roof.</span>
    </div>
 </div>
 </div>
 </Fade>

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

export default Section_1_1