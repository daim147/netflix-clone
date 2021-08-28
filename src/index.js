import React from "react";
import ReactDOM from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
