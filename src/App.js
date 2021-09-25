import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "./theme/global";

import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} style={{ fontSize: "15px" }} />
    </BrowserRouter>
  );
};

export default App;
