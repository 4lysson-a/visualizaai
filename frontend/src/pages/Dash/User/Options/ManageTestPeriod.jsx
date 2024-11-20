import { useModal } from '@/hooks/zustand/(private)/useModal';
import { subscriptionsEnum } from '@/utils/subscriptions';
import React from 'react';

export default function ManageTestPeriod() {
  const setModal = useModal(s => s.setModal);

  const handleClick = () => {
    setModal({
      is: true,
      type: subscriptionsEnum.testPeriod
    });
  };

  return (
    <div className="h-full flex flex-col gap-5 text-center">
      <button
        onClick={handleClick}
        type="button"
        className="bg-transparent text-yellow-500 font-bold p-3 border border-yellow-500 rounded-md shadow-md active:scale-90 active:bg-primary active:border-primary active:text-background"
      >
                Gerenciar periodo de teste
      </button>
    </div>
  );
}
