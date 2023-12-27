import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logIn: {
    email: "",
    password: "",
  },
};

export const otherSlice = createSlice({
  name: "other",
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      state.logIn = action.payload;
    },
  },
});

export const { setLogIn } = otherSlice.actions;
export default otherSlice.reducer;
