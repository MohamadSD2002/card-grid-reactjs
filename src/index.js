import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./components/redux/store";
import { ConfigProvider as AntProvider } from "antd";
import App from "./components/App";
import "./assets/sass/general.sass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <ReduxProvider store={store}>
      <AntProvider>
        <App />
      </AntProvider>
    </ReduxProvider>
  </Router>
  // </React.StrictMode>
);
