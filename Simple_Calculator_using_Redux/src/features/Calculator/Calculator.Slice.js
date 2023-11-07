import { createSlice } from "@reduxjs/toolkit";

const calcuatorSlice = createSlice({
  name: "calculator",
  initialState: { value: 0 },
  reducers: {
    add: (state, action) => {
      state.value = state.value + Number(action.payload);
    },
    subtract: (state, action) => {
      state.value = state.value - Number(action.payload);
    },
    multiply: (state, action) => {
      state.value = state.value * Number(action.payload);
    },
    divide: (state, action) => {
      if (action.payload == 0) {
        state.value = "Division by zero. Result invalid";
      } else {
        state.value = state.value / Number(action.payload);
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { add, subtract, multiply, divide, reset } =
  calcuatorSlice.actions;

export default calcuatorSlice.reducer;
