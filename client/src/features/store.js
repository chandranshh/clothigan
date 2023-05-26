import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productApi, particularProductApi } from "./slices/productAPI";
import setProducts from "./slices/productSlice";
import cartSliceReducer from "./slices/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartSliceReducer = persistReducer(
  persistConfig,
  cartSliceReducer
);

const store = configureStore({
  reducer: {
    allCartItems: persistedCartSliceReducer,
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

export const persistor = persistStore(store);

export default store;
