import "regenerator-runtime/runtime";
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  LOGIN_FETCH_REQUEST,
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_FAILURE,
} from "../../constants";

function* sendUser(payload) {
  const path = "https://jsonplaceholder.typicode.com/users";
  const { inputs } = payload;
  console.log('S', inputs)
  try {
    const response = yield call(axios.get, path);
    const users = yield response.data;
    yield put({ type: LOGIN_FETCH_SUCCESS, users, inputs });
  } catch (error) {
    yield put({ type: LOGIN_FETCH_FAILURE, message: error });
  }
}

function* sendUserWatcher() {
  yield takeEvery(LOGIN_FETCH_REQUEST, sendUser);
}

export default sendUserWatcher;
