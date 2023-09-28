import React, { createContext,useState,useEffect } from 'react'
import { products } from '../products'
export const Addtocart_context=createContext(null)//to do add to cart full functionality // firebase auth //complete final
const initial_state=()=>{
  let cart={}
    for(let i=1;i<=products.length;i++){
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
 console.log(items)
 useEffect(()=>{
  localStorage.setItem("addtocart",JSON.stringify(setitems.cart))
 },[setitems.cart])
 const contextvalue={items,addtocart,removefromcart}
  return (
    <Addtocart_context.Provider value={contextvalue}>{props.children}</Addtocart_context.Provider>
  )
}
