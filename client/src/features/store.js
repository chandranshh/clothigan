import { configureStore } from "@reduxjs/toolkit";
import { productApi, particularProductApi } from "./slices/productAPI";
import setProducts from "./slices/productSlice";
import cartSliceReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    allCartItems: cartSliceReducer,
    allProducts: setProducts,
    [productApi.reducerPath]: productApi.reducer,
    [particularProductApi.reducerPath]: particularProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(particularProductApi.middleware);
  },
});

export default store;
