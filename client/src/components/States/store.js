import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: {
    username: "",
    email: "",
    password: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload;
    },
  },
});

export const { setAccount } = authSlice.actions;
export default authSlice.reducer;
