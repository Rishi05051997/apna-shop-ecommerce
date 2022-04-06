import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/data-context";
import { AuthenticationProvider } from "./context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter>
      < AuthenticationProvider>
        < DataProvider>
          < App />
        </DataProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
