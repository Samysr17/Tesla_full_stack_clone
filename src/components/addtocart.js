import React from 'react'
import {useContext} from 'react'
import { products } from '../products'
import { Addtocart_context } from '../context/addtocart-context'
import {Cartitem} from './Cartitem'
const Addtocart = () => {
  const {items}=useContext(Addtocart_context);

  return (
    <div>
    <div className="text-xl">addtocart</div>
    <div>
    {products.map((iterator)=>{
      if(items[iterator.id]!==0){
        return(
          // <Cartitem data={iterator}/>
          <div>1</div>
        )

      }
    })}
    </div>
    </div>
  )
}

export default Addtocart