import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  token: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userAuthLogin: (state, action) => {
      state.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
  },
});

export const { userAuthLogin } = authSlice.actions;
export default authSlice.reducer;
