import { put, takeLatest } from "redux-saga/effects";
import {
  getUserDetailsFailed,
  getUserDetailsSuccess,
  getUserDetails,
} from "./userDetails.slice";

const getRequest = async (url) => {
  try {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (err) {
    return null;
  }
};

function* getUserDetailsRequest(action) {
  console.log("action", action);
  try {
    const apiResponse = yield getRequest(
      `https://jsonplaceholder.typicode.com/users/${action.payload.id}`
    );
    if (!apiResponse) {
      yield put(getUserDetailsFailed());
      return;
    }
    console.log("apiResponse", apiResponse);
    yield put(getUserDetailsSuccess({ results: apiResponse }));
  } catch (err) {
    yield put(getUserDetailsSuccess());
  }
}

export function* watchGetUserDetails() {
  yield takeLatest(getUserDetails, getUserDetailsRequest);
}
