import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CartProvider } from "./context/cart.context";
import "./index.css";
import { ScreenSizeProvider } from "./context/screen-size.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ScreenSizeProvider>
  </React.StrictMode>
);
