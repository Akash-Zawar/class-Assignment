import { put, takeLatest } from "redux-saga/effects";
import { getUserDataFailed, getUserDataSuccess } from "./userData.slice";

const getRequest = async (url) => {
  try {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (err) {
    return null;
  }
};

function* getUserData() {
  try {
    const apiResponse = yield getRequest(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (!apiResponse) {
      yield put(getUserDataFailed());
      return;
    }
    yield put(getUserDataSuccess({ results: apiResponse }));
  } catch (err) {
    yield put(getUserDataSuccess());
  }
}

export function* watchGetUserData() {
  yield takeLatest("userData/getUserData", getUserData);
}
