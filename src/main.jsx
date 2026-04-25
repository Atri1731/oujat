import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext";
import { TransportProvider } from "./context/TransportContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <TransportProvider>
        <App />
      </TransportProvider>
    </AuthProvider>
  </StrictMode>,
);
