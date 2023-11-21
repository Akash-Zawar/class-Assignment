import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getUserData: (state) => {
      state.isLoading = true;
    },
    getUserDataSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results;
    },
    getUserDataFailed: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const { getUserData, getUserDataSuccess, getUserDataFailed } =
  userDataSlice.actions;

export default userDataSlice.reducer;
