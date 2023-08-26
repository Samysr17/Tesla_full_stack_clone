import React from 'react'
import video_3 from './Model_3.webm'
import Fade from 'react-reveal/Fade'
import game from './images/new-interior.jpg'
import foot from './images/Red.jpg'
import con from './images/connected.jpg'
import vdo from './images/video2.webm'
const Section_3_1 = () => {
  return (
    <div>
    <div className="w-full h-screen relative bg-black">
    <video className="h-full w-full object-cover" src={video_3} autoPlay loop muted/>
   
   <div className="flex flex-col text-white absolute w-full h-screen top-0 text-center mt-[30%] md:mt-[8%] p-2">
      <Fade bottom><h1 className="text-3xl md:text-5xl font-bold hover:ease-in duration-300 hover:text-4xl cursor-pointer">Model 3</h1>
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

export default Section_3_1