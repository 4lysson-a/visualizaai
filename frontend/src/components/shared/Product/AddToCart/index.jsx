import React from 'react';
import useCart from '@/hooks/zustand/(public)/useCart';

export function AddToCart({ product }) {
  const [cart, setCart] = useCart(state => [state.cart, state.setCart]);

  const handleAddToCart = () => {
    const items = cart.items;
    const productIndex = items.findIndex(item => item.singleItem.id === product.id);
    if (productIndex === -1) {
      items.push({ singleItem: product, quantity: 1 });
    } else {
      items[productIndex].quantity += 1;
    }
    setCart({ ...cart, items: [...items] });
  };

  return (
    <button className="h-full flex items-center" onClick={handleAddToCart}>
      <div className="active:scale-90 transition-all">
        <svg
          className="w-6 h-6 flex *:fill-colorBorder"
          width="89"
          height="89"
          viewBox="0 0 89 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.75 44.5C0.75 20.3369 20.3369 0.75 44.5 0.75C68.6631 0.75 88.25 20.3369 88.25 44.5C88.25 68.6631 68.6631 88.25 44.5 88.25C20.3369 88.25 0.75 68.6631 0.75 44.5ZM44.5 9.5C35.2174 9.5 26.315 13.1875 19.7513 19.7513C13.1875 26.315 9.5 35.2174 9.5 44.5C9.5 53.7826 13.1875 62.685 19.7513 69.2487C26.315 75.8125 35.2174 79.5 44.5 79.5C53.7826 79.5 62.685 75.8125 69.2487 69.2487C75.8125 62.685 79.5 53.7826 79.5 44.5C79.5 35.2174 75.8125 26.315 69.2487 19.7513C62.685 13.1875 53.7826 9.5 44.5 9.5Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.875 22.625C48.875 21.4647 48.4141 20.3519 47.5936 19.5314C46.7731 18.7109 45.6603 18.25 44.5 18.25C43.3397 18.25 42.2269 18.7109 41.4064 19.5314C40.5859 20.3519 40.125 21.4647 40.125 22.625V40.125H22.625C21.4647 40.125 20.3519 40.5859 19.5314 41.4064C18.7109 42.2269 18.25 43.3397 18.25 44.5C18.25 45.6603 18.7109 46.7731 19.5314 47.5936C20.3519 48.4141 21.4647 48.875 22.625 48.875H40.125V66.375C40.125 67.5353 40.5859 68.6481 41.4064 69.4686C42.2269 70.2891 43.3397 70.75 44.5 70.75C45.6603 70.75 46.7731 70.2891 47.5936 69.4686C48.4141 68.6481 48.875 67.5353 48.875 66.375V48.875H66.375C67.5353 48.875 68.6481 48.4141 69.4686 47.5936C70.2891 46.7731 70.75 45.6603 70.75 44.5C70.75 43.3397 70.2891 42.2269 69.4686 41.4064C68.6481 40.5859 67.5353 40.125 66.375 40.125H48.875V22.625Z"
            fill="black"
          />
        </svg>
      </div>
    </button>
  );
}
