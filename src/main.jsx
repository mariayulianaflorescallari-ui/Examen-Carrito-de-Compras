import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import TiendaApp from "./TiendaApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TiendaApp />
  </StrictMode>
);
