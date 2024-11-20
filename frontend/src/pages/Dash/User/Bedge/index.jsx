import React from 'react';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import { subscriptionsEnum } from '@/utils/subscriptions';
import { useModal } from '@/hooks/zustand/(private)/useModal';

function TrialBadge() {
  const setModal = useModal(s => s.setModal);

  function handleClick() {
    setModal({
      is: true,
      type: subscriptionsEnum.testPeriod
    });
  }

  return (
    <div
      onClick={handleClick}
      className="bg-yellow-500 text-white font-bold rounded-md shadow-md px-2 py-1 absolute top-16 left-5"
    >
            Período de teste
    </div>
  );
}

function ProPlanBadge() {
  return (
    <div className="bg-green-500 text-white font-bold rounded-md shadow-md px-2 py-1 absolute top-16 left-5">
            Assinatura ativa
    </div>
  );
}

function InactiveBadge() {
  const setModal = useModal(s => s.setModal);

  function handleClick() {
    setModal({
      is: true,
      type: subscriptionsEnum.active
    });
  }

  return (
    <div
      onClick={handleClick}
      className="bg-red-500 text-white font-bold rounded-md shadow-md px-2 py-1 absolute top-16 left-5"
    >
            Assinatura inativa
    </div>
  );
}

export default function Bedge() {
  const subscription = useAuth(s => s.subscription);

  switch (subscription.status) {
  case subscriptionsEnum.testPeriod:
    return <TrialBadge />;
  case subscriptionsEnum.active:
    return <ProPlanBadge />;
  default:
    return <InactiveBadge />;
  }
}
