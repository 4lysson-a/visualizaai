import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.bundle";

import "./index.css";
import ErrorBoundary from "./components/shared/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);
