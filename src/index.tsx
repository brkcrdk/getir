import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyles";
import theme from "theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
