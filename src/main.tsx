import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SearcherStateProvider } from "./context/SearcherStateProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearcherStateProvider>
      <App />
    </SearcherStateProvider>
  </StrictMode>
);
