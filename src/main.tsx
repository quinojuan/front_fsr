import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NewPublisher from "./NewPublisher.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <NewPublisher />
  </React.StrictMode>
);
