import React from 'react'

const Cartitem = (props) => {
  const {id,Name,Price,Image}=props.data;
  return (
    <div>
      <div className="flex justify-center">
      <img className="w-[5%] h-[5%] mt-[5%]" src={Image}></img>
    <div className="text-white mt-[5%]">{Name}</div>
    <div className="text-white mt-[5%]">${Price}</div>
    </div>
    </div>
  )
}

export default Cartitem