import React, { createContext,useState,useEffect } from 'react'
import { products } from '../products'
export const Addtocart_context=createContext(null)
const initial_state=()=>{
  let cart={}
    for(let i=1;i<=products.length;i++){
        cart[i]=0;
    }
    return cart
};
export const Addtocart_contextProvider= (props) => {
  const[items,setitems]=useState(initial_state());
  const getotal=()=>{
    let totalsum=0;
    for(const i in items){
      if(items[i]>0){
        let info=products.find((product)=>product.id===Number(i))
        totalsum+=items[i]*info.Price;
      }
    }
    return totalsum;
  }
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
 const contextvalue={items,addtocart,removefromcart,getotal}
  return (
    <Addtocart_context.Provider value={contextvalue}>{props.children}</Addtocart_context.Provider>
  )
}
