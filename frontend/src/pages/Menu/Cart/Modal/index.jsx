import React from 'react';

import { sty } from '@/utils';

import List from './List';
import Header from './Header';
import SendOrder from './SendOrder';
import useCart from '@/hooks/zustand/(public)/useCart';

const Backdrop = ({ isClose }) => (
  <div className={sty('bg-background opacity-80 fixed top-0 left-0 w-full h-full z-[49]', isClose && 'hidden')} />
);

export default function CartModal({ isClose, setIsClose }) {
  const ref = React.useRef();

  const [cart] = useCart(state => [state.cart, state.setCart]);

  const totalPrice = cart?.items
    .reduce((acc, item) => acc + item.quantity * item.singleItem.get('price'), 0)
    .toFixed(2);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClose(true);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div
        ref={ref}
        style={{
          gridTemplateColumns: '1fr',
          gridTemplateRows: '1fr 10fr 1fr'
        }}
        className={sty(
          'p-6 overflow-y-scroll grid gap-4 justify-between',
          'bg-card shadow-sm *:animate-duration-300 fixed bottom-4 right-4',
          'rounded-lg scale-100 w-full h-full max-w-[90%] max-h-[90%] z-50 transition-all origin-bottom-right',
          !isClose && '*:animate-fade-up',
          isClose && 'invisible opacity-0 scale-0'
        )}
      >
        <Header totalPrice={totalPrice} />
        <List />
        <SendOrder totalPrice={totalPrice} />
      </div>
      <Backdrop isClose={isClose} />
    </>
  );
}
