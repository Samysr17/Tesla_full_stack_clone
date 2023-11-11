import React from 'react'
import {useContext} from 'react'
import { products } from '../products'
import { Addtocart_context } from '../context/addtocart-context'
import Cartitem from './Cartitem'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import {loadStripe} from '@stripe/stripe-js';
const Addtocart = () => {
  const {items}=useContext(Addtocart_context);
  const {getotal}=useContext(Addtocart_context)
  const subtotal=getotal()
  let state=false
  const Check=()=>{
    if(state===false){
    return(
      <Fade left>
      <div className="text-white text-xl  md:text-3xl">Garage is Empty !!!</div>
      </Fade>
      
      );
    }
  }
  // const payment=async()=>{
  //   const stripe = await loadStripe('pk_test_51OB9TcSB3m3uX235oYnbAGt7I1TflMXxSLco872UxB27EUY0KqPVTnXHR9z8V5OxPbeV0ZQpYz7rWDY7UKsTPriH005xaPamUu');
  //   const body={
  //     products:carts
  //   }
  //   const headers={
  //     "Content-Type":"application/json"
  //   }
  //   const response=await fetch("http://localhost:7000/api/create-checkout-session",{
  //     method:"POST",
  //     headers:headers,
  //     body:JSON.stringify(body)
  //   });
  //   const session=await response.json();
  //   const result=stripe.redirectToCheckout({
  //     sessionId:session.id
  //   })
  //   if(result.error){
  //     console.log(result.error)
  //   }
  // }
  return (
    <div>
    <div className="flex justify-between bg-black">
    <div className='  w-[80%] min-h-screen max-h-[500vh] p-[3vh] '>
    <Fade left>
      <div className=" text-xl  md:text-3xl text-white flex justify-center mt-[40%] md:mt-[10%] ml-[20%] text-center md:ml-[40%] mb-[5%]">Your Garage </div>
      </Fade>
      <div className=" text-white flex justify-center mt-[20%] md:mt-[10%] ml-[20%] md:ml-[40%] mb-[5%]">
    <Check/>
    </div>
    {products.map((iterator)=>{
      if(items[iterator.id]!==0){
        state=true;
        console.log(items[iterator])
        return(
         <Cartitem data={iterator}/>
        )
      }
    })}
    </div>
    {/* <div className='md:hidden flex bg-black max-h-[500vh] w-[40%] sticky '>
      <div className="w-[90%] hidden  md:flex flex-col space-y-8 justify-center mt-[50%]  ">
      <p className='text-white  text-2xl text-center  '>Order Summary</p>
      <div className="flex justify-between border-t-2">
      <p className='text-white text-center   text-xl  '>Subtotal:</p>
      <p className='text-white text-center text-xl     '>{subtotal}</p>
      
      </div>
      <div className="flex justify-between border-t-2">
      <p className="text-white text-center   text-xl ">Tax:</p>
      <p className="text-white text-center   text-xl ">{subtotal*0.005}</p>
      </div> 
      <div className="flex justify-between border-t-2 ">
      <p className="text-white  text-center  text-xl ">Total:</p>
      <p className="text-white  text-center  text-xl ">{subtotal+subtotal*0.005}</p>
      </div>
      <button  className=' bg-transaprent text-white border-2 border-white p-3 rounded-md text-xl hover:w-[80%] hover:ml-[10%] hover:ease-in cursor-pointer'>Checkout</button>
      <button className='  bg-white p-3 rounded-md text-xl hover:w-[80%] hover:ml-[10%] hover:ease-in cursor-pointer'><Link to="/">Continue Shopping</Link></button>
      </div>
    </div> */}
    <Fade right>
    <div className='hidden md:flex bg-black max-h-[500vh] w-[40%] sticky '>
      <div className="w-[90%] hidden  md:flex flex-col space-y-8 justify-center mt-[50%]  ">
      <p className='text-white  text-2xl text-center  '>Order Summary</p>
      <div className="flex justify-between border-t-2">
      <p className='text-white text-center   text-xl  '>Subtotal:</p>
      <p className='text-white text-center text-xl     '>{subtotal}</p>
      
      </div>
      <div className="flex justify-between border-t-2">
      <p className="text-white text-center   text-xl ">Tax:</p>
      <p className="text-white text-center   text-xl ">{subtotal*0.005}</p>
      </div> 
      <div className="flex justify-between border-t-2 ">
      <p className="text-white  text-center  text-xl ">Total:</p>
      <p className="text-white  text-center  text-xl ">{subtotal+subtotal*0.005}</p>
      </div>
      <button  className=' bg-transaprent text-white border-2 border-white p-3 rounded-md text-xl hover:w-[80%] hover:ml-[10%] hover:ease-in cursor-pointer'>Checkout</button>
      <button className='  bg-white p-3 rounded-md text-xl hover:w-[80%] hover:ml-[10%] hover:ease-in cursor-pointer'><Link to="/">Continue Shopping</Link></button>
      </div>
    </div>
    </Fade>
    </div>
    </div>
  )
}

export default Addtocart