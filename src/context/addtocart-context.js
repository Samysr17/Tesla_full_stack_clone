import React, { createContext,useState } from 'react'
import { products } from '../products'
export const Addtocart_context=createContext(null)
const initial_state=()=>{
  let cart={}
    for(let i=1;i<products.length;i++){
        cart[i]=0;
    }
    return cart
};
export const Addtocart_contextProvider= (props) => {
  const[items,setitems]=useState(initial_state());
  const addtocart=(Itemid)=>{
   setitems((prev)=>({...prev,[Itemid]:prev[Itemid]+1}));
};
const removefromcart=(Itemid)=>{
    setitems((prev)=>({...prev,[Itemid]:prev[Itemid]-1}));
 };
 const contextvalue={items,addtocart,removefromcart}
  return (
    <Addtocart_context.Provider value={contextvalue}>{props.children}</Addtocart_context.Provider>
  )
}