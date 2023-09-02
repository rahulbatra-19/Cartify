import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import App from "./components/App";
import rootReducer from "./reducers";

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type !== "function") {
      console.log("ACTION_TYPE =", action.type);
    }
    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log("Before Store", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App store={store} />
    </Router>
  </React.StrictMode>
);
