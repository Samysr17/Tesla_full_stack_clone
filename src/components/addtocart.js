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
      <div className="w-[90%] border-2 border-white rounded-md h-[30%] flex flex-col space-y-4 justify-center mt-[32%] sticky ">
      <p className='text-white  text-3xl text-center  '>Order Summary</p> 
      <p className='text-white  text-xl  '>Price:{subtotal}</p>
      <button className='text-white text-xl cursor-pointer'>Checkout</button>
      </div>
    </div>
    </div>
  )
}

export default Addtocart