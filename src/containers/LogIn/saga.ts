import "regenerator-runtime/runtime";
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
    LOGIN_FETCH_REQUEST,
    LOGIN_FETCH_SUCCESS,
    LOGIN_FETCH_FAILURE,
  } from "../../constants";
// import { ResponseTypes, } from "../../types";



function* sendUser() {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users`
    );
    const users = yield response.data;
    console.log(users);
    yield put({ type: LOGIN_FETCH_SUCCESS, users});
  } catch (error) {
    yield put({ type: LOGIN_FETCH_FAILURE, message: error });
  }
}

function* sendUserWatcher() {
  yield takeEvery(LOGIN_FETCH_REQUEST, sendUser);
}

export default sendUserWatcher;
