import useCart from '@/hooks/zustand/(public)/useCart';
import { sty } from '@/utils';
import React from 'react';

export default function FloatBtn({ ...rest }) {
  const [cart] = useCart(state => [state.cart]);

  const hasItems = cart?.items?.length > 0;
  const totalItems = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <button
      className="bg-floatingButtonBackground p-3 rounded-full fixed bottom-4 right-4 shadow-sm active:scale-90 outline-none"
      {...rest}
    >
      <div className={sty('h-0', hasItems && 'h-8')}>
        <div className={sty('opacity-0', hasItems && 'opacity-100')}>
          <p className="text-primary font-bold">{totalItems}</p>
        </div>
      </div>
      <svg
        className="*:fill-primary"
        width="25"
        height="25"
        viewBox="0 0 78 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.1668 62C57.9118 62 54.5002 65.4116 54.5002 69.6666C54.5002 71.7 55.3079 73.65 56.7457 75.0878C58.1835 76.5256 60.1335 77.3333 62.1668 77.3333C64.2002 77.3333 66.1502 76.5256 67.588 75.0878C69.0258 73.65 69.8335 71.7 69.8335 69.6666C69.8335 67.6333 69.0258 65.6833 67.588 64.2455C66.1502 62.8077 64.2002 62 62.1668 62ZM0.833496 0.666626V8.33329H8.50016L22.3002 37.4283L17.0868 46.82C16.5118 47.8933 16.1668 49.1583 16.1668 50.5C16.1668 52.5333 16.9746 54.4833 18.4123 55.9211C19.8501 57.3589 21.8002 58.1666 23.8335 58.1666H69.8335V50.5H25.4435C25.1893 50.5 24.9456 50.399 24.7659 50.2193C24.5861 50.0395 24.4852 49.7958 24.4852 49.5416C24.4852 49.35 24.5235 49.1966 24.6002 49.0816L28.0502 42.8333H56.6085C59.4835 42.8333 62.0135 41.2233 63.3168 38.885L77.0402 14.0833C77.3085 13.47 77.5002 12.8183 77.5002 12.1666C77.5002 11.15 77.0963 10.1749 76.3774 9.45605C75.6585 8.73716 74.6835 8.33329 73.6668 8.33329H16.9718L13.3685 0.666626M23.8335 62C19.5785 62 16.1668 65.4116 16.1668 69.6666C16.1668 71.7 16.9746 73.65 18.4123 75.0878C19.8501 76.5256 21.8002 77.3333 23.8335 77.3333C25.8668 77.3333 27.8169 76.5256 29.2546 75.0878C30.6924 73.65 31.5002 71.7 31.5002 69.6666C31.5002 67.6333 30.6924 65.6833 29.2546 64.2455C27.8169 62.8077 25.8668 62 23.8335 62Z"
          fill="black"
        />
      </svg>
    </button>
  );
}
