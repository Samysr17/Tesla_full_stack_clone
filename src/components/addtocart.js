import React from 'react'
import {useContext} from 'react'
import { products } from '../products'
import { Addtocart_context } from '../context/addtocart-context'
import Cartitem from './Cartitem'
const Addtocart = () => {
  const {items}=useContext(Addtocart_context);

  return (
    <div>
    <div className='bg-black p-[10vh] w-screen h-screen'>
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
    </div>
  )// eslint-disable-next-line
}

export default Addtocart