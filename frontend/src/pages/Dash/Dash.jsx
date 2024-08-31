import React from "react";

import { Outlet } from "react-router-dom";

import NavMenu from "@/components/shared/NavMenu";
import PayModal from "@/components/shared/PayModal";
import useAuth from "@/hooks/zustand/(private)/useAuth";
import posthog from "posthog-js";

export default function Dash() {
    const [auth] = useAuth(s => [s.auth]);

    React.useEffect(() => {
        if (auth) {
            posthog.identify(auth.id, { email: auth.get("email"), name: auth.get("username") });
        }
    }, []);

    return (
        <div className="w-full flex flex-col justify-between h-full box-border">
            <PayModal />

            <div className="h-full">
                <Outlet />
            </div>

            <div className="pl-5 pr-5 pb-5">
                <NavMenu />
            </div>
        </div>
    );
}
