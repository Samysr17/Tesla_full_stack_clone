import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/CartSlice"

// create store
export const store = configureStore({
    reducer:{
        allCart:cartSlice
    }
})