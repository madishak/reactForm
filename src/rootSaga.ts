import { all } from "redux-saga/effects";
import sendUserWatcher from "./containers/LogIn/saga";

export default function* rootSaga() {
    yield all([
        sendUserWatcher(),
    ])
}