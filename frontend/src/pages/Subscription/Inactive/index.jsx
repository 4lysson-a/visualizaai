import React from 'react';
import SubscriptionButton from '@/components/shared/SubscribeBtn';

export default function SubscriptionInactive() {
  return (
    <div className="h-full p-10 justify-between flex flex-col">
      <h1>Sua assinatura está inativa, faça sua assinatura para continuar</h1>

      <SubscriptionButton />
    </div>
  );
}
