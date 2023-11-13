import React from 'react'
import {useContext} from 'react'
import { products } from '../products'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import {loadStripe} from '@stripe/stripe-js';
import { useSelector } from 'react-redux'
const Addtocart = () => {
  const {carts}=useSelector((state)=>state.allCart)
  console.log(carts)
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
    <div className='row justify-content-center m-0'>
      <div className='col-md-8 mt-5 mb-5 cardsdetails'>
        <div className="card">
          <div className="card-header bg-dark p-3">
            <div className='card-header-flex'>
              <h5 className='text-white m-0'>Cart Calculation{carts.length >0 ? `(${carts.length})` : ""}</h5>
              {carts.length > 0 ? (
                <button className='btn btn-danger mt-0 btn-sm' >
                  <i className='fa fa-trash-alt mr-2'></i><span>EmptyCart</span>
                </button>
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
                    <th>Action</th>
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
                        <button className='prdct-delete'>
                          <i className='fa fa-trash-alt'></i>
                        </button>
                      </td>
                      <td><div className='product-img'><img src={data.Image} alt="" /></div></td>
                      <td><div className='product-name'><p>{data.Name}</p></div></td>
                      <td>{data.Price}</td>
                      <td>
                        <div className="prdct-qty-container">
                          <button className='prdct-qty-btn' type='button'>
                            <i className='fa fa-minus'></i>
                          </button>
                          <input type="text" className='qty-input-box'  disabled name="" id="" />
                          <button className='prdct-qty-btn' type='button' >
                            <i className='fa fa-plus'></i>
                          </button>
                        </div>
                      </td>
                      <td className='text-right'>₹</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan={3}></th>
                    <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'></span></th>
                    <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹ </span></th>
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