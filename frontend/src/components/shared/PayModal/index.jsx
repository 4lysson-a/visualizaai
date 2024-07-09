import React from 'react';

import SubscriptionButton from '../SubscribeBtn';
import { ReactModal } from '../Modals';
import { useModal } from '@/hooks/zustand/(private)/useModal';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import { subscriptionsEnum } from '@/utils/subscriptions';

export default function PayModal() {
  const isFirstTime = React.useRef(true);

  const subscription = useAuth((s) => s.subscription);

  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = useModal((s) => [s.modal, s.setModal]);

  React.useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;

      if (subscription?.status !== subscriptionsEnum.active && subscription?.status !== subscriptionsEnum.testPeriod) {
        setTimeout(() => {
          setOpen(true);
        }, 1500);
      }

      return;
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    setModal((prev) => ({ ...prev, is: false }));
  };

  return (
    <ReactModal
      isOpen={open || modal?.is}
      options={{ noPadding: true }}
      className='pb-10 pt-10 p-5 h-full'
      onClose={() => handleClose()}>
      <div className='h-full flex flex-col justify-between'>
        <p className='text-xl'>Finalize sua assinatura para aproveitar todos os beneficios do app</p>
        <h1 className='text-5xl font-bold text-primary text-center'>
          R$ 9,99 <span className='text-2xl opacity-80'>/mes</span>
        </h1>
        <SubscriptionButton />
      </div>
    </ReactModal>
  );
}
