import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productApi, particularProductApi } from "./slices/productAPI";
import setProducts from "./slices/productSlice";
import cartSliceReducer from "./slices/cartSlice";
import authSliceReducer from "./slices/authSlice";
import { userApi } from "./slices/userAPI";

const persistConfigCart = {
  key: "cart",
  storage,
};

const persistConfigAuth = {
  key: "user",
  storage,
};
const persistedCartSliceReducer = persistReducer(
  persistConfigCart,
  cartSliceReducer
);

const persistedAuthSliceReducer = persistReducer(
  persistConfigAuth,
  authSliceReducer
);

const store = configureStore({
  reducer: {
    userAuthLogin: persistedAuthSliceReducer,
    allCartItems: persistedCartSliceReducer,
    allProducts: setProducts,
    [productApi.reducerPath]: productApi.reducer,
    [particularProductApi.reducerPath]: particularProductApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(particularProductApi.middleware)
      .concat(userApi.middleware);
  },
});

export const persistor = persistStore(store);

export default store;
