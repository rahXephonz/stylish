import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

type RootElement = Element | DocumentFragment;

const rootElement = document.getElementById("root");
const renderRoot = createRoot(rootElement as RootElement);

renderRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
