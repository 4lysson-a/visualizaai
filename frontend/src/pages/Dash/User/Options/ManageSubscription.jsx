import useAuth from '@/hooks/zustand/(private)/useAuth';
import React from 'react';

function handleManageSubscription() {
  const link = import.meta.env.VITE_STRIPE_CLIENT_PORTAL_LINK;
  window.open(link, '_blank');
}

export default function ManageMySubscription() {
  const auth = useAuth(s => s.auth);

  if (auth.get('stripeCustomerId')) {
    return (
      <div className="h-full flex flex-col gap-5 text-center">
        <button
          onClick={handleManageSubscription}
          type="button"
          className="bg-transparent font-bold p-3 border border-[var(--texts)] rounded-md shadow-md active:scale-90 active:bg-primary active:border-primary active:text-background"
        >
                    Gerenciar minha assinatura
        </button>
      </div>
    );
  }

  return null;
}
