import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: JSON.parse(localStorage.getItem("cart_items")) || [],
  },

  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      // newItem = { id, product, quantity }
      const newItem = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === newItem.id);

      if (index >= 0) {
        // increase quantity
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        // add to cart
        state.cartItems.unshift(newItem);
      }
    },

    removeAllItems(state, action) {
      localStorage.removeItem("cart_items");

      state.cartItems = [];
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;

      // check if product is available in cart
      const index = state.cartItems.findIndex((item) => item.id === id);

      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }

      localStorage.setItem("cart_items", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== idNeedToRemove
      );

      localStorage.setItem("cart_items", JSON.stringify(state.cartItems));
    },
  },
});

const { actions, reducer } = cartSlice;

export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
  removeAllItems,
} = actions;
export default reducer;
