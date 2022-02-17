import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                  <Routes>
                      <Route path="/*" element={ <App/> }/>
                  </Routes>
              </BrowserRouter>
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
