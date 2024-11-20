import React from 'react';
import useCart from '@/hooks/zustand/(public)/useCart';
import ScrollShadow from '@/components/shared/ScrollShadow';
import { sty } from '@/utils';

function RemoveItem({ item }) {
  const [cart, setCart] = useCart(state => [state.cart, state.setCart]);

  const handleRemoveItem = item => {
    const newCart = cart.items
      .map(cartItem => {
        if (cartItem.singleItem.id === item.singleItem.id) {
          if (cartItem.quantity > 1) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return null;
          }
        }
        return cartItem;
      })
      .filter(Boolean);

    setCart({ items: newCart });
  };

  return (
    <button
      className="w-5 h-5 active:scale-90 transition-all cursor-pointer opacity-50"
      onClick={() => handleRemoveItem(item)}
    >
      <svg width="17" height="17" viewBox="0 0 66 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.5 5C4.17392 5 2.90215 5.52678 1.96447 6.46447C1.02678 7.40215 0.5 8.67392 0.5 10V15C0.5 16.3261 1.02678 17.5979 1.96447 18.5355C2.90215 19.4732 4.17392 20 5.5 20H8V65C8 67.6522 9.05357 70.1957 10.9289 72.0711C12.8043 73.9464 15.3478 75 18 75H48C50.6522 75 53.1957 73.9464 55.0711 72.0711C56.9464 70.1957 58 67.6522 58 65V20H60.5C61.8261 20 63.0979 19.4732 64.0355 18.5355C64.9732 17.5979 65.5 16.3261 65.5 15V10C65.5 8.67392 64.9732 7.40215 64.0355 6.46447C63.0979 5.52678 61.8261 5 60.5 5H43C43 3.67392 42.4732 2.40215 41.5355 1.46447C40.5979 0.526784 39.3261 0 38 0L28 0C26.6739 0 25.4021 0.526784 24.4645 1.46447C23.5268 2.40215 23 3.67392 23 5H5.5ZM20.5 25C21.163 25 21.7989 25.2634 22.2678 25.7322C22.7366 26.2011 23 26.837 23 27.5V62.5C23 63.163 22.7366 63.7989 22.2678 64.2678C21.7989 64.7366 21.163 65 20.5 65C19.837 65 19.2011 64.7366 18.7322 64.2678C18.2634 63.7989 18 63.163 18 62.5V27.5C18 26.837 18.2634 26.2011 18.7322 25.7322C19.2011 25.2634 19.837 25 20.5 25ZM33 25C33.663 25 34.2989 25.2634 34.7678 25.7322C35.2366 26.2011 35.5 26.837 35.5 27.5V62.5C35.5 63.163 35.2366 63.7989 34.7678 64.2678C34.2989 64.7366 33.663 65 33 65C32.337 65 31.7011 64.7366 31.2322 64.2678C30.7634 63.7989 30.5 63.163 30.5 62.5V27.5C30.5 26.837 30.7634 26.2011 31.2322 25.7322C31.7011 25.2634 32.337 25 33 25ZM48 27.5V62.5C48 63.163 47.7366 63.7989 47.2678 64.2678C46.7989 64.7366 46.163 65 45.5 65C44.837 65 44.2011 64.7366 43.7322 64.2678C43.2634 63.7989 43 63.163 43 62.5V27.5C43 26.837 43.2634 26.2011 43.7322 25.7322C44.2011 25.2634 44.837 25 45.5 25C46.163 25 46.7989 25.2634 47.2678 25.7322C47.7366 26.2011 48 26.837 48 27.5Z"
          fill="black"
        />
      </svg>
    </button>
  );
}

export default function List() {
  const cart = useCart(state => state.cart);

  return (
    <ScrollShadow
      color="var(--card)"
      className="flex flex-col gap-6 h-full overflow-y-scroll relative border-y border-b-2 border-background pb-2"
    >
      {cart?.items?.map((item, index) => (
        <div key={item.singleItem.id} className={sty('flex flex-row justify-between', index === 0 && 'mt-4')}>
          <div className="flex flex-col">
            <p className="break-words w-[90%]">{item.singleItem.get('name')}</p>
            <p className="opacity-80">
              {' '}
              {item.quantity}x - R$ {Number(item.singleItem.get('price') * item.quantity).toFixed(2)}
            </p>
          </div>

          <RemoveItem item={item} />
        </div>
      ))}
    </ScrollShadow>
  );
}
