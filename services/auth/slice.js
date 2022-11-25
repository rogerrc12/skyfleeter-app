import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, validateSession } from "./actions";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isSignedIn: false,
    isProcessing: false,
    isLoading: false,
    user: null,
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isProcessing = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isProcessing = false;
      state.isSignedIn = true;
      state.user = action.payload;
    },
    [loginUser.rejected]: (state) => {
      state.isProcessing = false;
    },
    [validateSession.pending]: (state) => {
      state.isLoading = true;
    },
    [validateSession.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSignedIn = true;
      state.user = action.payload;
    },
    [validateSession.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
      state.isSignedIn = false;
    },
    [logoutUser]: (state) => {
      state.isSignedIn = false;
      return state;
    },
  },
});

export default authSlice.reducer;
