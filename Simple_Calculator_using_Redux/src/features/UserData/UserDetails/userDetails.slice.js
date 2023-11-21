import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    getUserDetails: (state) => {
      state.isLoading = true;
      console.log("state", state);
    },
    getUserDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results;
    },
    getUserDetailsFailed: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const { getUserDetails, getUserDetailsSuccess, getUserDetailsFailed } =
  userDetailsSlice.actions;

export default userDetailsSlice.reducer;
