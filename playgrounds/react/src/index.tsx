import React from "react";
import { createRoot } from "react-dom/client";
import { StylishProvider } from "@stylish-ui/react";

import App from "./App";

type RootElement = Element | DocumentFragment;

const rootElement = document.getElementById("root");
const renderRoot = createRoot(rootElement as RootElement);

renderRoot.render(
  <React.StrictMode>
    <StylishProvider>
      <App />
    </StylishProvider>
  </React.StrictMode>
);
