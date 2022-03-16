import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, } from "redux";
import createSagaMidleware from "redux-saga";
import reducer from "./src/rootReducer";
import rootSaga from "./src/rootSaga";
import App from "./src/App";


const sagaMidleware = createSagaMidleware();
const middleware = applyMiddleware(sagaMidleware);

const store = createStore(reducer, middleware);
sagaMidleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

