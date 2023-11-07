import { configureStore } from "@reduxjs/toolkit";

import CalculatorSlice from "../features/Calculator/Calculator.Slice";

const store = configureStore({
  reducer: {
    Calculator: CalculatorSlice,
  },
});

export default store;
