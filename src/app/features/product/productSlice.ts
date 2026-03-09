import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [{ id: 1, item: "ittems" }],
  favourite: [{ id: 1, item: "items" }],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, actoin) => {},
    addToFavourite: (state, action) => {},
    removeFromFavourite: (state, action) => {},
  },
});

export const { getProducts, addToFavourite, removeFromFavourite } =
  productSlice.actions;
export default productSlice.reducer;
