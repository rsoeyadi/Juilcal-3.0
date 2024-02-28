import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SupabaseProvider } from "./lib/SupabaseProvider.tsx";
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SupabaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <PersistGate /> delays the rendering of the app's UI until the
          persisted state has been retrieved and saved to redux. */}
          <App />
        </PersistGate>
      </Provider>
    </SupabaseProvider>
  </React.StrictMode>
);
