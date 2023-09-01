import React from 'react'
import Fade from 'react-reveal'

const Cartitem = (props) => {
  const {Name,Price,Image}=props.data;
  return (
    <div>
      <Fade left>
      <div className="flex justify-between p-[10vh] border-2 border-white shadow-2xl ">
      <div>
      <img className="w-[40%] h-[100%] " src={Image} alt="/"></img>
      </div>
    <div className="text-white ">{Name}</div>
    <div className="text-white ">${Price}</div>
    </div>
    </Fade>
    </div>
  )
}

export default Cartitem