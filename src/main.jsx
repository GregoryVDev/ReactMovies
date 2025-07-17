import { App } from "./App.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/card.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
