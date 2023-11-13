import React from 'react'
import { useContext } from 'react'
import video_3 from './panel_1.webm'
import Fade from 'react-reveal/Fade'
import panel_img from './panel_img.avif'
import {Link} from 'react-router-dom'
import { Addtocart_context } from '../context/addtocart-context'

const Section_1_1 = () => {
  const {addtocart}=useContext(Addtocart_context)
  return (
    <div>
    <div className="w-full h-screen relative">
    <video className="h-full w-full object-cover" src={video_3} autoPlay loop muted/>
   
   <div className="flex flex-col text-white absolute w-full h-screen top-0 text-center mt-[30%] md:mt-[8%] p-2">
      <Fade bottom><h1 className="text-3xl md:text-5xl font-bold hover:ease-in duration-300 hover:text-4xl cursor-pointer">Solar Panel</h1>
      </Fade> 
      <Fade bottom>
       <p className="text-sm md:text-base  ">Schedule a Demo Test today</p>
       </Fade>
       <div className="mt-[30%] md:mt-[20%]">
      <Fade bottom>
       <button className="p-2 bg-transparent hover:ease-in duration-300 hover:w-[40%]  border-white hover:bg-white mt-24 md:mt-20 hover:text-black  border-4  font-semibold w-80 rounded-lg ">Demo Test</button>
       </Fade> 
   </div>
   </div>
 
   </div>
   <div className="bg-black text-white h-screen w-screen flex-col">
 <Fade bottom>
 <p className="pt-4 text-xl ml-[10%] hover:ease-in duration-300 hover:text-2xl cursor-pointer "></p>
 <h1 className="mt-16 font-semibold text-2xl ml-[10%]  hover:ease-in duration-300 hover:text-xl cursor-pointer">Clean Aesthetic</h1>
 </Fade>
 <Fade left>
 <p className='max-w-[40%] pt-4 ml-[10%] text-sm'>All-black panels and proprietary hardware keep the array close to your roof — no bulky racks, no large gaps.</p>
 </Fade>
 <Fade left>
 <div className="flex justify-center">
   <img className="w-[80%] mt-8 h-[40vh] md:w-[50%] md:h-[60vh] " src={panel_img} alt=''/>
 </div>
 </Fade>
 <div className='md:hidden flex flex-col w-[70%] justify-center items-center mt-16 mb-16   ml-[15%]'>
  <Fade left>
    <div className="flex flex-col ">
      <h1 className="font-bold text-sm hover:ease-in duration-300 hover:text-xl">Concealed Edge</h1>
      <span className="">A front skirt helps hide hardware and the panel edge.</span>
    </div>
    </Fade>
 <Fade right>
    <div className="flex flex-col ml-[5%] mt-8 " >
      < h1 className="font-bold text-sm hover:ease-in duration-300 hover:text-xl">No Visible Grid</h1>
      <span className="">Panels and hardware are all-black for a uniform, monochromatic look.</span>
    </div>
    </Fade>
 </div> 
 <Fade bottom>
 <div className="hidden md:flex justify-center cursor-pointer">
 <div className='md:flex md:justify-between md:w-[50%] mt-16 mb-16 '>
    <div className="flex flex-col w-[33%]">
      <h1 className="font-bold text-xl hover:ease-in duration-300 hover:text-2xl">Concealed Edge</h1>
      <span className="mt-4">A front skirt helps hide hardware and the panel edge.</span>
    </div>
    <div className="flex flex-col ml-[2%] w-[33%]">
      < h1 className="font-bold text-xl hover:ease-in duration-300 hover:text-2xl">No Visible Grid</h1>
      <span className="mt-4">Panels and hardware are all-black for a uniform, monochromatic look.</span>
    </div>
    <div className="flex flex-col ml-[2%] w-[33%]">
       <h1 className="font-bold text-xl hover:ease-in duration-300 hover:text-2xl">Low-Profile</h1>
      <span className="mt-4">Rail-free mounting keeps panels close to your roof.</span>
    </div>
 </div>
 </div>
 </Fade>
 </div>
   <div className='bg-black h-screen w-screen bg-cover bg-center'>
     <div className=' p-[20vh] text-center items-center flex flex-col justify-center'>
      <Fade left>
        <h1 className='text-white text-xl w-screen  md:text-3xl'>Transform Your Energy</h1>
        </Fade>
        <Fade right>
        <button onClick={()=>addtocart(5)} className="bg-transparent w-[50vw]  mt-8 border-white border-4 hover:ease-in duration-300 md:hover:w-[35%] w-50vh  md:w-[50%] p-2  text-white hover:bg-white hover:text-black  rounded-sm"><Link to="/addtocart" >Order Now</Link></button>
        </Fade>
        <Fade left>
        <button className="bg-gray-600 w-[50vw]  opacity-75 hover:opacity-100 mt-8 text-white hover:ease-in duration-300 md:hover:w-[35%] border-4 border-gray-600  md:w-[50%] p-2   rounded-sm">Schedule a Virtual Consultation</button>
        </Fade>
        <Fade right>
        <span className="text-sm underline text-white mt-4 cursor-pointer hover:text-xl hover:ease-in duration-300 w-screen">Get Updates</span>
        </Fade>
      </div>
      <div className="sm:flex mt-[10%] justify-center hidden text-white space-x-4 cursor-pointer ">
        <div className="hover:ease-in duration-300  hover:text-xl">Tesla © 2023</div>
        <div className="hover:ease-in duration-300  hover:text-xl">Privacy & Legal</div>
        <div className="hover:ease-in duration-300  hover:text-xl">Vehicle Recalls</div>
        <div className="hover:ease-in duration-300  hover:text-xl">Contact</div>
        <div className="hover:ease-in duration-300  hover:text-xl">Location</div>
      </div>
    </div>
 </div>
  )
}

export default Section_1_1