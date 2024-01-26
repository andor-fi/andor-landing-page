import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import "../src/scss/main.css";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import UserContext from "./context/User";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import App from "./App";

ReactDOM.render(
      <UserContext>
        <LayoutProvider>
          <UserProvider>
            <ThemeProvider >
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <CssBaseline />
                <App />
              </MuiPickersUtilsProvider>

              <ToastContainer />
            </ThemeProvider>
          </UserProvider>
        </LayoutProvider>
      </UserContext>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
