import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice"
import categoriesSlice from "./categories/categoriesSlice";
import productSlice from "./product/productSlice";
import stockSlice from "./stock/stockSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    categories: categoriesSlice,
    product: productSlice,
    stock: stockSlice
  },
});

export default store;
