import React from "react";

import Bedge from "@/pages/Dash/User/Bedge";
import useAuth from "@/hooks/zustand/(private)/useAuth";
import PageTemplate from "@/pages/Dash/lib/PageTemplate";
import ManageMySubscription from "./Options/ManageSubscription";
import { subscriptionsEnum } from "@/utils/subscriptions";
import ManageTestPeriod from "./Options/ManageTestPeriod";
import CallWhatsapp from "./Options/CallWhatsapp";
import { LocalStorage } from "@/helpers/LocalStorage";

function handleExit() {
    LocalStorage.logout();
    window.location.reload();
}

export default function User() {
    const [auth, subscription] = useAuth(s => [s.auth, s.subscription]);

    return (
        <PageTemplate disableDesactive title={{ text: "Olá,", highlight: auth?.get("username") }}>
            <Bedge />
            <div className="h-full flex flex-col gap-8 pt-10">
                {subscription.status === subscriptionsEnum.active && (
                    <div className="h-full flex flex-col gap-5 text-center">
                        <ManageMySubscription />
                    </div>
                )}

                {subscription.status === subscriptionsEnum.testPeriod && (
                    <div className="h-full flex flex-col gap-5 text-center">
                        <ManageTestPeriod />
                    </div>
                )}

                <CallWhatsapp />

                <button
                    onClick={handleExit}
                    type="button"
                    className="bg-red-500 font-bold text-white shadow-md p-3 rounded-md active:scale-90"
                >
                    Sair do sistema
                </button>
            </div>
        </PageTemplate>
    );
}
