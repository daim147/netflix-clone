import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "pending",
};

export const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.status = "fetched";
    },
    logout: (state) => {
      state.user = null;
      state.status = "outed";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUserAuth = (state) => state.userAuth;

export default userSlice.reducer;
