import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {legacy_createStore as  createStore } from "redux";
import rootReducer from "./js/Reducers/reducer";
import App from "./App";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
