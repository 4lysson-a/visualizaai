import React, { Suspense } from "react";

import Loading from "./components/shared/Loading";

const Router = React.lazy(() => import("./router"));

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useChangeTheme from "./hooks/useChangeTheme";
import LogoLoading from "./components/shared/Loading/Logo";
import useValidateNewVersion from "./hooks/useValidateNewVersion";

function App() {
    useValidateNewVersion();
    useChangeTheme();

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
