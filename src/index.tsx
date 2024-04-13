import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.scss";
import { MantineProvider, createTheme } from "@mantine/core";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const theme = createTheme({
  colors: {
    // Customize colors here
    // Add more custom colors if needed
  },
  // Add more theme customizations if needed
});
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
