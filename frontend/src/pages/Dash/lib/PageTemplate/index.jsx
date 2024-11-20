import useAuth from '@/hooks/zustand/(private)/useAuth';
import { sty } from '@/utils';
import { subscriptionsEnum } from '@/utils/subscriptions';
import React from 'react';

export default function PageTemplate({ children, title, disableDesactive }) {
  const subscription = useAuth(s => s.subscription);

  const isSubscriptionInactive = () => {
    if (disableDesactive) {
      return false;
    }

    if (subscription.status === subscriptionsEnum.active) {
      return false;
    }

    if (subscription.status === subscriptionsEnum.testPeriod) {
      return false;
    }

    return true;
  };

  return (
    <div
      className={sty(
        'relative',
        'overflow-y-auto flex flex-col gap-10 p-5 pb-24 relative',
        isSubscriptionInactive() && 'pointer-events-none overflow-hidden'
      )}
    >
      <h1 className="text-3xl">
        {title.text} <span className="text-[var(--primary)] font-bold text-md">{title.highlight}</span>
      </h1>

      {isSubscriptionInactive() && (
        <div className="fixed w-full h-full top-0 left-0 bg-[var(--background-invert)] z-[99] opacity-30" />
      )}
      {children}
    </div>
  );
}
