import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme.js";
import { store } from "./store/store.js";
import { SnackbarProvider } from "notistack";
import NotificationListener from "./components/NotificationListener.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <NotificationListener />
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
