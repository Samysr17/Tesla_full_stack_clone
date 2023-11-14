import React from 'react'
import { useState,useEffect } from 'react'
import { products } from '../products'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import {loadStripe} from '@stripe/stripe-js';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToCart,removefromcart,decrement,emptycart} from './redux/features/CartSlice'
const Addtocart = () => {
  const {carts}=useSelector((state)=>state.allCart)
  // console.log(carts)
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
   //payment gateway integration
  // const payment=async()=>{
  //   const stripe = await loadStripe('pk_test_51OB9TcSB3m3uX235oYnbAGt7I1TflMXxSLco872UxB27EUY0KqPVTnXHR9z8V5OxPbeV0ZQpYz7rWDY7UKsTPriH005xaPamUu');
  //   const body={
  //     product:subtotal+(subtotal*0.05)
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
    <>
    <div className='row justify-content-center m-0 bg-black text-white h-screen'>
      <div className='col-md-8 mt-5 mb-5 cardsdetails'>
        <div className="card">
          <div className="card-header bg-dark p-3">
            <div className='card-header-flex'>
              <h5 className='text-white m-0'>Cart Calculation{carts.length >0 ? `(${carts.length})` : ""}</h5>
              {carts.length > 0 ? (
                <button onClick={remove_all} className="bg-white cursor-pointer ml-[50vh] mt-16 text-black rounded-sm " >Empty Cart</button>
              ) : ""}
            </div>
          </div>
          <div className="card-body p-0">
            {carts.length === 0 ? (
              <table className='table cart-table mb-0'>
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <div className='cart-empty'>
                        <i className='fa fa-shopping-cart'></i>
                        <p>Your Cart Is Empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className='table cart-table mb-0 table-responsive-sm'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className='text-right'>
                      <span id="amount" className='amount'>Total Amount</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <button onClick={()=>remove(data.id)} className='text-black bg-white rounded-sm p-1'>remove
                        </button>
                      </td>
                      <td><div className='product-img'><img src={data.Image} alt="" /></div></td>
                      <td><div className='product-name'><p>{data.Name}</p></div></td>
                      <td>{data.Price}</td>
                      <td>
                        <div className="flex space-x-2">
                          <button onClick={()=>increment(data)} className='p-2 rounded-sm bg-white text-black  '>+</button>
                          <button onClick={data.quantity<=1?()=>remove(data.id):()=>minus(data)} className='p-2 rounded-sm bg-white text-black' >-</button>
                        </div>
                      </td>
                      <td className='text-white'>{data.quantity}</td>
                      <td className='text-white'>${data.Price*data.quantity}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th colSpan={3}></th>
                    <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totq}</span></th>
                    <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>${totalprice} </span></th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Addtocart