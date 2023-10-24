import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  showUserData: false,
  showAllProduct: false,
};

const productSlice = createSlice({
  name: "Data",
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

const store = configureStore({
  reducer: productSlice.reducer,
});

export const productAction = productSlice.actions;
export default store;
