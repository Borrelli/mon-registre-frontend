import React from "react";
import ReactDOM from "react-dom";
import { Dashboard } from "./adapters/views/pages/dashboard.page";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./core/store";

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
