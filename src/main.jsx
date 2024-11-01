// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts/stylesheet.css";
import "./index.css";
import App from "./App.jsx";

import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);