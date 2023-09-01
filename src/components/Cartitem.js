import React, { useContext } from 'react'
import Fade from 'react-reveal'
import { Addtocart_context } from '../context/addtocart-context';
const Cartitem = (props) => {
  const {id,Name,Price,Image}=props.data;
  const {items}=useContext(Addtocart_context)
  let amount=items[id];
  let total=Price;
  const calcuate=()=>{
    amount++;
    total*=amount;
  }
  return (
    <div>
      <Fade left>
      <div className="flex flex-col md:flex-row justify-center md:p-[10vh] border-2 border-white  ">
      <div>
      <img className="md:w-[30%] md:h-[100%] w-screen h-[100%] " src={Image} alt="/"></img>
      </div>
      <div className='flex justify-between md:hidden'>
    <div className="text-white">{Name}</div>
    <div className="text-white  " >${Price}</div>
    </div>
    <div className='md:flex md:flex-col text-white  space-y-4 hidden '>
    <div className="text-white text-xl">{Name}</div>
    <div className="text-white text-xl" >${Price}</div>
    <div className="text-white text-xl" >Total:${total}</div>
    <div className="text-white text-xl" >Quantity:{items[id]}</div>
    <button onClick={calcuate}  className="p-1 h-8 w-10 text-black bg-white text-xl ">+</button>
    <button className="p-1 h-8 w-10 text-black bg-white text-xl">-</button>
    </div>
    </div>
    </Fade>
    </div>
  )
}

export default Cartitem