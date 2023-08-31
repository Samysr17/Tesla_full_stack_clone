import React from 'react'

const Cartitem = (props) => {
  const {id,Name,Price,Image}=props.data;
  return (
    <div>
      <div className="flex justify-center mt-[20%]">
    <div>{Name}</div>
    <img className="w-[5%] h-[5%]" src={Image}></img>
    <div>{Price}</div>
    </div>
    </div>
  )
}

export default Cartitem