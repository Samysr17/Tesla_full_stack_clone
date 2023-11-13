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

        },

    }
});

export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam} = cartSlice.actions;

export default cartSlice.reducer;