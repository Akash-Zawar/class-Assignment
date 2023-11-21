import { all, fork } from "redux-saga/effects";
import { watchGetUserData } from "../features/UserData/userData.saga";
import { watchGetUserDetails } from "../features/UserData/UserDetails/userDetails.saga";

export default function* rootSaga() {
  yield all([fork(watchGetUserData), fork(watchGetUserDetails)]);
}
