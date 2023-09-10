import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NewPublisher from "./NewPublisher.tsx";
import NewInforme from "./NewInforme.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/newpublisher",
    element: <NewPublisher />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
      <App />
      <NewPublisher />
      <NewInforme />
  </React.StrictMode>
);
