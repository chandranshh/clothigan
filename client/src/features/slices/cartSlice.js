import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartQuantity: 0,
  cartPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.cartQuantity++;
      }
      state.cartPrice = calculateCartPrice(state.cartItems);
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      }
      state.cartPrice = calculateCartPrice(state.cartItems);
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
          state.cartQuantity--;
        }
      }
      state.cartPrice = calculateCartPrice(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartQuantity--;
      state.cartPrice = calculateCartPrice(state.cartItems);
    },
  },
});

// Helper function to calculate the cart price based on items and their quantities
const calculateCartPrice = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    if (item.quantity > 1) {
      return acc + item.price * item.quantity;
    } else {
      return acc + item.price;
    }
  }, 0);
};

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
