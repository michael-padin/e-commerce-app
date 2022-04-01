import { createSlice } from "@reduxjs/toolkit";


const initialState = { products: [], quantity: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.quantity += 1;
      state.products.push(payload);
      state.totalPrice = payload.price * payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;

