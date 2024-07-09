import React, { Suspense } from 'react';

import Loading from './components/shared/Loading';

const Router = React.lazy(() => import('./router'));

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import useChangeTheme from './hooks/useChangeTheme';

function App() {
  useChangeTheme();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
