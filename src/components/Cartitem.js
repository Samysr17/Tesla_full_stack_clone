import React, { useContext } from 'react'
import Fade from 'react-reveal'
import { Addtocart_context } from '../context/addtocart-context';
const Cartitem = (props) => {
  const {id,Name,Price,Image}=props.data;
  const {items,addtocart,removefromcart}=useContext(Addtocart_context)
  const number=items[id];
  

  let total=Price;
  // const calcuate=()=>{ 
  //   amount++;
  //   total*=amount;//local storage to be implemented
  //   //wishlist
  //   //ui tools to complete all
  // }
  //need to have the total sum and the UI
  return (
    <div>
      <Fade left>
      <div className='flex justify-between md:hidden'>
    <div className="flex flex-col space-y-4 ml-8">
    <div className="text-white">{Name}</div>
    <img className="w-[80%]" src={Image}/>
    </div>
    <div className="flex flex-col space-y-8 ml-16">
    <div className="text-white" >${Price}</div>
    <div className="flex space-x-2">
    <button onClick={()=>{addtocart(id)}}  className=" w-[90%] h-[90%] text-black bg-white text-sm ">+</button>
    <div className="text-white text-xl" >{number>0 && number}</div>
    <button onClick={()=>{removefromcart(id)}}  className=" w-[80%] h-[90%] text-black bg-white text-xl">-</button>
    </div>
    </div>
    </div>
    <div className='md:flex md:flex-col text-white ml-[10%]   space-y-4 hidden p-16  w-[80%] '>
    <div className="flex justify-between">
    <div className="">
    <div className="text-white text-xl">{Name}</div>
    <img className="w-[80%]" src={Image}/>
    </div>
    <div className="mr-[20%] ">
    <div className="text-white text-2xl text-bold ml-[50%] " >${Price*number}</div>
    {/* <div className="text-white text-xl" >Subtotal:${total*number}</div> */}
    <div className="flex space-x-4 mt-8">
    <div className="text-white text-sm" >Quantity:</div>
    <button onClick={()=>{addtocart(id)}}  className="p-1 h-8 w-10 text-black bg-white text-md ">+</button>
    <div className="text-white text-xl" >{number>0 && number}</div>
    <button onClick={()=>{removefromcart(id)}}  className="p-1 h-8 w-10 text-black bg-white text-md">-</button>
    </div>
    </div>
    </div>
    </div>
    </Fade>
    <div className="h-8 bg-black"></div>
    </div>
    
  )
}

export default Cartitem