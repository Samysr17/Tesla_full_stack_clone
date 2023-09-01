import React from 'react'
import Fade from 'react-reveal'
const Cartitem = (props) => {
  const {Name,Price,Image}=props.data;
  return (
    <div>
      <Fade left>
      <div className="flex flex-col md:flex-row justify-between md:p-[10vh] border-2 border-white  ">
      <div>
      <img className="md:w-[30%] md:h-[100%] w-screen h-[100%] " src={Image} alt="/"></img>
      </div>
      <div className='flex justify-between md:hidden'>
    <div className="text-white">{Name}</div>
    <div className="text-white  " >${Price}</div>
    </div>
    <div className='md:flex justify-center space-x-4 hidden '>
    <div className="text-white text-xl">{Name}</div>
    <div className="text-white text-xl" >${Price}</div>
    <button className="p-1 h-8 w-10 text-black bg-white text-xl ">+</button>
    <button className="p-1 h-8 w-10 text-black bg-white text-xl">+</button>
    </div>
    </div>
    </Fade>
    </div>
  )
}

export default Cartitem