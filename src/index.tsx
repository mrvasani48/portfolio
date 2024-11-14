import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.scss";
import { MantineProvider } from "@mantine/core";
import theme from "theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
