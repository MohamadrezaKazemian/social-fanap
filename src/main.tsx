import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Layout from "./components/Layout/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
