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
    <div className='bg-black  w-screen h-screen'>
      <div className=" p-[3vh] text-2xl text-white flex justify-center ">Your Garage</div>
    {products.map((iterator)=>{
      if(items[iterator.id]!==0){
        console.log(items[iterator])
        return(
         <Cartitem data={iterator}/>
        )
      }
    })}
    </div>
    <div>
      <p className='text-white bg-black text-xl flex justify-center'>Price:{subtotal}</p>
    </div>
    </div>
  )// eslint-disable-next-line
}

export default Addtocart