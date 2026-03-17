import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [{ id: 1, cartItem: "Item1" }] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
