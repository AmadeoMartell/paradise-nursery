import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for the Paradise Nursery shopping cart.
 * Each item keeps quantity and unit price so totals can be derived.
 */
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    add(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    remove(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    },
    clear(state) {
      state.items = [];
    },
  },
});

export const { add, increaseQuantity, decreaseQuantity, remove, clear } =
  cartSlice.actions;

export default cartSlice.reducer;
