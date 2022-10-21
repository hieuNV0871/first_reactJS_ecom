import { configureStore } from "@reduxjs/toolkit";
import cartItemslice from "./shopping-cart/cartItemslice";

export const store = configureStore({
    reducer: cartItemslice
})