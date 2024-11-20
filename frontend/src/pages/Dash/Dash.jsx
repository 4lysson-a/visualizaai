import React from 'react';

import { Outlet } from 'react-router-dom';

import NavMenu from '@/components/shared/NavMenu';
import PayModal from '@/components/shared/PayModal';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import posthog from 'posthog-js';
import { CreateCompany } from '../Auth/Signup/Steps';

export default function Dash() {
  const [auth, companys] = useAuth(s => [s.auth, s.companys]);

  React.useEffect(() => {
    if (auth) {
      posthog.identify(auth?.id, {
        email: auth.get('email'),
        name: auth.get('username'),
        stripeId: auth.get('stripeCustomerId'),
        verified: auth.get('emailVerified'),
        companys: companys.map(company => {
          return {
            name: company.get('name'),
            phone: company.get('phone'),
            id: company.id
          };
        })
      });
    }
  }, []);

  if (companys.length === 0) {
    return (
      <CreateCompany
        onSuccess={() => {
          window.location.reload();
        }}
        userId={auth.id}
      />
    );
  }

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
