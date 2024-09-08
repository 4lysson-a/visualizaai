import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.bundle";
import posthog from "posthog-js";

import "./index.css";
import ErrorBoundary from "./components/layout/(public)/ErrorBoundary";

import { PostHogProvider } from "posthog-js/react";

posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST,
    person_profiles: "identified_only"
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <PostHogProvider client={posthog}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </PostHogProvider>
);
