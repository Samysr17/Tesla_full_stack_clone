import React from 'react'
import Fade from 'react-reveal'
import panel_img from './panel_img.avif'
import {Link} from 'react-router-dom'
import {addToCart} from './redux/features/CartSlice'
import { useDispatch } from 'react-redux'
import { products } from '../products'

const Section_4_1 = () => {
  const dispatch=useDispatch();
  const send=(e)=>{
    dispatch(addToCart(e))
  }
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
    <button className=" md:ml-[10%] md:mr-[2%] bg-transparent hover:border-white hover:border-4 hover:ease-in duration-300 hover:w-[70%] hover:text-white    w-[50%] p-3 bg-white hover:bg-transparent  rounded-2xl">Order Now</button>
    <button className=" p-3 bg-transparent border-white text-white hover:bg-white hover:ease-in duration-300 hover:w-[70%]  hover:text-black border-4 md:mr-[10%] opacity-25  md:ml-[2%]  w-[50%] mt-4 md:mt-0  rounded-2xl">Demo Drive</button>
    </Fade> 
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
        <h1 className='text-white text-xl w-screen  md:text-3xl'>Transform Your Roof</h1>
        </Fade>
        <Fade right>
        <button onClick={()=>send(products[3])} className="bg-transparent w-[50vw]  mt-8 border-white border-4 hover:ease-in duration-300 md:hover:w-[35%] w-50vh  md:w-[50%] p-2  text-white hover:bg-white hover:text-black  rounded-sm"><Link to="/addtocart" >Order Now</Link></button>
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

export default Section_4_1