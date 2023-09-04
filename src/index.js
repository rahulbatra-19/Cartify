import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import App from "./components/App";
import rootReducer from "./reducers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  // Add any other configuration options you need
};

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type !== "function") {
      console.log("ACTION_TYPE =", action.type);
    }
    next(action);
  };
const persistedReducer = persistReducer(persistConfig, rootReducer); // Use your actual root reducer here

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));

console.log("Before Store", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => {
  root.render(
    <React.StrictMode>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <App store={store} />
      </Router>
    </React.StrictMode>
  );
};
persistStore(store, null, renderApp);
