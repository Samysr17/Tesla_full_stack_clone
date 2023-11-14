import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // add to cart
        addToCart: (state, action) => {
        //   console.log(action)
        const item_index=state.carts.findIndex((item)=>item.id===action.payload.id)
        console.log(item_index)
        if(item_index>=0){
            state.carts[item_index].quantity+=1
        }else{
            const temp={...action.payload,quantity:1};
            state.carts=[...state.carts,temp];
        }
        },

        removefromcart:(state,action)=>{
            const data=state.carts.filter((elemnt)=>elemnt.id!==action.payload);
            state.carts=data
        },
        decrement:(state,action)=>{
          const item_index_dec=state.carts.findIndex((item)=>item.id===action.payload.id)
          if(item_index_dec>=0){
            state.carts[item_index_dec].quantity-=1;
          }
        },
        emptycart:(state,action)=>{
            state.carts=[]
        }

    }
});

export const { addToCart,removefromcart,decrement ,emptycart} = cartSlice.actions;

export default cartSlice.reducer;