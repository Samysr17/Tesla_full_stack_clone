import React from 'react'
import { useState,useEffect} from 'react'
import { Fade } from 'react-reveal'
import {loadStripe} from '@stripe/stripe-js';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToCart,removefromcart,decrement,emptycart} from './redux/features/CartSlice'
const Addtocart = () => {
  const {carts}=useSelector((state)=>state.allCart)
  console.log(carts)
  const [totalprice,settotalprice]=useState(0);
  const [totq,settotq]=useState(0);
  const total=()=>{
    let totalprice=0
    carts.map((iterator)=>{
        totalprice+=(iterator.Price*iterator.quantity);
    })
    settotalprice(totalprice*0.005+totalprice);
  }
  useEffect(()=>{
     total();
  },[total])
  const total_q=()=>{
    let totq=0;
    carts.map((iterator_1)=>{
       totq+=(iterator_1.quantity);
    })
    settotq(totq);
  }
  useEffect(()=>{
     total_q();
  },[total_q])
  // console.log(carts)
  const dispatch=useDispatch();
  const increment=(e)=>{
    dispatch(addToCart(e))
  }
  const remove=(e)=>{
    dispatch(removefromcart(e))
  }
  const minus=(e)=>{
    dispatch(decrement(e))
  }
  const remove_all=()=>{
    dispatch(emptycart())
  }
  //cosoling cart items
   //payment gateway integration\
   //
   const payment = async()=>{
    const stripe = await loadStripe("pk_test_51OB9TcSB3m3uX235oYnbAGt7I1TflMXxSLco872UxB27EUY0KqPVTnXHR9z8V5OxPbeV0ZQpYz7rWDY7UKsTPriH005xaPamUu");

    const body = {
        products:carts
    }
    const headers = {
        "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:7000/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
        sessionId:session.id
    });
    // console.log(result)
    // console.log(session.id)
    if(result.error){
        console.log(result.error);
    }
}
  // console.log(carts);
  return (
    <>
    <div className='bg-black text-white h-screen'>
      <div className='s'>
        <div className="">
        <Fade left>
          <div className="card-header bg-dark p-3">
            <div className='card-header-flex'>
              <h5 className='text-white m-0'>{carts.length >0 ? `(${carts.length})` : ""}</h5>
              {carts.length > 0 ? (
                <button onClick={remove_all} className="bg-white cursor-pointer ml-[50vh] mt-16 text-black rounded-sm " >Empty Cart</button>
              ) : ""}
            </div>
          </div>
          </Fade >

          <div className="card-body p-0">
            {carts.length === 0 ? (
               <Fade left>
                 <div className='flex justify-center mt-[25vh] text-3xl'>
                 <p>Your Cart Is Empty!!!</p>
                </div>
                </Fade>
            ) : (
              <div className='flex flex-col justify-center'>
                <div>
                  {carts.map((data) => (
                    <div className="flex justify-between h-[25%] w-[60%] ml-[20%] ">
                      <Fade left>
                      <div>
                        <button onClick={()=>remove(data.id)} className='text-black bg-white rounded-sm p-1'>remove</button>
                      </div>
                      <div className='w-40 h-40'><img src={data.Image} alt="" /></div>
                      <div className='product-name'><p>{data.Name}</p></div>
                      <div>{data.Price}</div>
                      <div>
                        <div className="flex space-x-4">
                          <button onClick={()=>increment(data)} className='p-2 rounded-sm bg-white text-black  '>+</button>
                          <button onClick={data.quantity<=1?()=>remove(data.id):()=>minus(data)} className='p-2 rounded-sm bg-white text-black' >-</button>
                        </div>
                      </div>
                      <td className='text-white'>{data.quantity}</td>
                      <td className='text-white'>${data.Price*data.quantity}</td>
                      </Fade>
                    </div>
                  ))}
              
                </div>
                <Fade right>
                <div>
                  <tr className="flex justify-between ml-[20%] w-[60%]">
                    <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totq}</span></th>
                    <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>${totalprice} </span></th>
                    <button onClick={payment} className="bg-white text-black p-2">Checkout</button>
                  </tr>
                </div>
                </Fade>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Addtocart
