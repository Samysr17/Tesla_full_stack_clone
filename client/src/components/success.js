import React from 'react'
import {useSelector} from 'react-redux' 
const Success = () => {
  const {carts}=useSelector((state)=>state.allCart)
  console.log(carts)
  return (
    <>
    <div  className="bg-black h-screen w-screen" >
    <div>
      {carts.map((iterator)=>{
        <div className="flex flex-col">
         <img src={iterator.Image}></img>
        </div>
      })}
    </div>
    <div className="text-white">Order placed</div>
    </div>
    </>
  )
}

export default Success