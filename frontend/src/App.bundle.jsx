import React, { Suspense } from 'react';
import Loading from './components/shared/Loading';
import { ToastContainer } from 'react-toastify';
import useChangeTheme from './hooks/useChangeTheme';
import LogoLoading from './components/shared/Loading/Logo';
import useValidateNewVersion from './hooks/useValidateNewVersion';
import posthog from 'posthog-js';
import { useAuth0 } from '@auth0/auth0-react';
import 'react-toastify/dist/ReactToastify.css';

const Router = React.lazy(() => import('./router'));

function App() {
  const { isLoading: loadingAuth0 } = useAuth0();

  useValidateNewVersion();
  useChangeTheme();

  posthog.capture('$pageview');

  if (loadingAuth0) return <Loading />;

  return (
    <>
      <LogoLoading />
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
