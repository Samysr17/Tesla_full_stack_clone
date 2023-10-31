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
    <div className="flex justify-between bg-black">
    <div className='  w-[80%] min-h-screen max-h-[500vh] p-[3vh] '>
      <div className="  text-3xl text-white flex justify-center mt-[10%] text-center ml-[40%] mb-[5%]">Your Cart </div>
    {products.map((iterator)=>{
      if(items[iterator.id]!==0){
        console.log(items[iterator])
        return(
         <Cartitem data={iterator}/>
        )
      }else{
        <div className="text-xl text-white">Hoho nothing to show here!!!! add something bitch</div>
      }
    })}
    </div>
    <div className=' bg-black max-h-[500vh] w-[40%] sticky '>
      <div className="w-[90%] hidden  md:flex flex-col space-y-8 justify-center mt-[50%]  ">
      <p className='text-white  text-2xl text-center  '>Order Summary</p>
      <div className="flex justify-between border-t-2">
      <p className='text-white text-center   text-xl  '>Subtotal:</p>
      <p className='text-white text-center text-xl    '>{subtotal}</p>
      </div>
      <div className="flex justify-between border-t-2">
      <p className="text-white text-center   text-xl ">Tax:</p>
      <p className="text-white text-center   text-xl ">{subtotal*0.005}</p>
      </div> 
      <div className="flex justify-between border-t-2 ">
      <p className="text-white  text-center  text-xl ">Total:</p>
      <p className="text-white  text-center  text-xl ">{subtotal+subtotal*0.005}</p>
      </div>
      <button className=' bg-white p-3 rounded-md text-xl hover:w-[80%] hover:ml-[10%] hover:ease-in cursor-pointer'>Checkout</button>
      </div>
    </div>
    </div>
  )
}

export default Addtocart