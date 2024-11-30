import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.bundle';
import posthog from 'posthog-js';

import './index.css';
import ErrorBoundary from './components/layout/(public)/ErrorBoundary';

import { PostHogProvider } from 'posthog-js/react';
import { Auth0Provider } from '@auth0/auth0-react';

posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  person_profiles: 'identified_only'
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: `${window.location.origin}/dash/auth/validation`,
      audience: import.meta.env.VITE_AUTH0_AUDIENCE
    }}
  >
    <PostHogProvider client={posthog}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </PostHogProvider>
  </Auth0Provider>
);