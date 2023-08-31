import React from 'react'
import {useContext} from 'react'
import { products } from '../products'
import { Addtocart_context } from '../context/addtocart-context'
const Addtocart = () => {
  const {items}=useContext(Addtocart_context);

  return (
    <div>
    <div className="text-xl">addtocart</div>
    <div>
    {products.map((iterator)=>{
      if(items[1]!==0){
        return(
          <div className='text-xl'>item</div>
        )

      }
    })}
    </div>
    </div>
  )
}

export default Addtocart