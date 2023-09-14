import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userId = action.payload;
      state.error = null;
    },
    logoutUser: (state) => {
      state.userId = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
