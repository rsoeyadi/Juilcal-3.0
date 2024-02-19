import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SupabaseProvider } from "./lib/SupabaseProvider.tsx";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SupabaseProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SupabaseProvider>
  </React.StrictMode>
);
