import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./root-saga";
import userDataSlice from "../features/UserData/userData.slice";
import userDetailsSlice from "../features/UserData/UserDetails/userDetails.slice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    userData: userDataSlice,
    userDetails: userDetailsSlice,
  },
  middleware: (current) => current({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
