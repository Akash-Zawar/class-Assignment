import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.data.push({ ...action.payload, quantity: 1 });
        return;
      }
      state.data[index].quantity++;
    },
    removeFromCart: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data.splice(index, 1);
    },
    addMoreQuantity: (state, action) => {
      const { id } = action.payload;
      const productIndex = state.data.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        state.data[productIndex].quantity += 1;
      }
    },
    reduceQuantity: (state, action) => {
      const { id } = action.payload;
      const productIndex = state.data.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        state.data[productIndex].quantity -= 1;
        if (state.data[productIndex].quantity <= 0) {
          state.data.splice(productIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, addMoreQuantity, reduceQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
