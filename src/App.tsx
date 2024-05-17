import React from "react";
import GlobalStyle from "./styles/global";
import Router from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
