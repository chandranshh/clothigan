import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
  token: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userAuthLogin: (state, action) => {
      state._id = action.payload.user.id;
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    userAuthLogout: (state) => {
      state._id = "";
      state.email = "";
      state.token = "";
      state.isAuthenticated = false;
    },
  },
});

export const { userAuthLogin, userAuthLogout } = authSlice.actions;
export default authSlice.reducer;
