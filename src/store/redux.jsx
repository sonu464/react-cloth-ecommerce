import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const initialState = {
  data: [],
  showUserData: false,
  showAllProduct: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    update(state) {
      state.data = action.payload;
    },
    show(state) {
      state.showUserData = !state.showUserData;
    },
    showAllProduct(state) {
      state.showAllProduct = !state.showAllProduct;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const productAction = productSlice.actions;
export const authActions = authSlice.actions;

export default store;
