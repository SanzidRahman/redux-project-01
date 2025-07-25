const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [],
};

const productsSlice = createSlice({
  name: "NoorShop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProducts = state.cart.find((item) => (
        item.id === action.payload.id
      ))
      
      if (existingProducts) {
        existingProducts.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseingQuantity : (state , action ) => {
      const existingProducts = state.cart.find((item) => (
        item.id === action.payload.id
      ))
      if (existingProducts) {
        existingProducts.quantity += 1
      }
    },
    decreaseingQuantity : (state , action ) => {
      const existingProducts = state.cart.find((item) => (
        item.id === action.payload.id
      ))
      if (existingProducts) {
        existingProducts.quantity -= 1
      }
    },
    removeCartItem : (state , action ) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    }
  },
});

export default productsSlice.reducer;
export const { addToCart, increaseingQuantity, decreaseingQuantity ,removeCartItem } = productsSlice.actions;
