import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./App";
import toys from "./Reducers/toys";

const store = createStore(
  toys,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
