import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import createStore from './store/createStore';

const { store, persistor } = createStore();

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);  