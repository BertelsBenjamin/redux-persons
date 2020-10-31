import React from "react";
import ReactDOM from "react-dom";

import { combineReducers, createStore } from "redux";

import personReducer from "./store/reducers/persons";

import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  persons: personReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
