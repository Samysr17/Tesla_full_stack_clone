import React from 'react'
import {useContext} from 'react'
import { products } from '../products'
import { Addtocart_context } from '../context/addtocart-context'
import Cartitem from './Cartitem'
const Addtocart = () => {
  const {items}=useContext(Addtocart_context);
  const {getotal}=useContext(Addtocart_context)
  const subtotal=getotal()
  return (
    <div className="flex justify-between">
    <div className='bg-black  w-[70%] min-h-screen max-h-[300vh] p-[3vh] '>
      <div className="  text-2xl text-white flex justify-center mt-[8%] mb-[5%]">Your Cart </div>
    {products.map((iterator)=>{
      if(items[iterator.id]!==0){
        console.log(items[iterator])
        return(
         <Cartitem data={iterator}/>
        )
      }
    })}
    </div>
    <div className=' bg-black max-h-[300vh] w-[40%]  '>
      <div className="w-[90%]  flex flex-col space-y-8 justify-center mt-[32%] sticky ">
      <p className='text-white  text-3xl text-center  '>Order Summary</p>
      <div className="flex justify-between">
      <p className='text-white text-center   text-xl  '>Subtotal:</p>
      <p className='text-white text-center   text-xl  '>{subtotal}</p>
      </div>
      <div className="flex justify-between">
      <p className="text-white text-center   text-xl ">Tax:</p>
      <p className="text-white text-center   text-xl ">{subtotal*0.005}</p>
      </div> 
      <div className="flex justify-between">
      <p className="text-white  text-center  text-xl ">Total:</p>
      <p className="text-white  text-center  text-xl ">{subtotal+subtotal*0.005}</p>
      </div>
      <button className=' bg-white p-3 rounded-md text-xl cursor-pointer'>Checkout</button>
      </div>
    </div>
    </div>
  )
}

export default Addtocart