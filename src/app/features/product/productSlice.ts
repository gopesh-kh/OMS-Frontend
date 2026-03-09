import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [{ id: 1, item: "ittems" }],
  wishlist: [{ id: 1, item: "items" }],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, actoin) => {},
    getFavourite: (state, action) => {},
  },
});

export const { getProducts, getFavourite } = productSlice.actions;
export default productSlice.reducer;
