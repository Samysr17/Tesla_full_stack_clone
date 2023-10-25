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
    <div>
    <div className='bg-black  w-screen h-screen p-[3vh] '>
      <div className="  text-2xl text-white flex justify-center mt-[10%] mb-[5%]">Your Cart </div>
    {products.map((iterator)=>{
      if(items[iterator.id]!==0){
        console.log(items[iterator])
        return(
         <Cartitem data={iterator}/>
        )
      }
    })}
    </div>
    <div className='flex justify-center bg-black '>
      <p className='text-white  text-xl mr-[5%] '>Price:{subtotal}</p>
      <button className='text-white text-xl cursor-pointer'>Checkout</button>
    </div>
    </div>
  )// eslint-disable-next-line
}

export default Addtocart