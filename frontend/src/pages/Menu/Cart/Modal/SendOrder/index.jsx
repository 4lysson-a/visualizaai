import React from 'react';
import SendSVG from '@/assets/svgComponents/Send';
import useCart from '@/hooks/zustand/(public)/useCart';
import useMenu from '@/hooks/zustand/(public)/useMenu';

export default function SendOrder({ totalPrice }) {
  const [name, setName] = React.useState('');

  const menu = useMenu(s => s.menu);
  const [cart] = useCart(state => [state.cart, state.setCart]);

  const phone = menu?.company?.get('phone');
  const isCartEmpty = cart.items.length === 0;

  const isDisabled = isCartEmpty || name.length < 3;

  const msgTemplate = menu.company.get('message');

  const handleSendOrderToWhatsApp = () => {
    const order = cart.items
      .map(item => {
        return `${item.quantity}x - ${item.singleItem.get('name')}`;
      })
      .join('\n');

    const message = msgTemplate
      .replace(/{nome}/g, name)
      .replace(/{produtos}/g, order)
      .replace(/{valor}/g, `R$ ${totalPrice}`);

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="opacity-60">
                Para finalizar o pedido insira seu nome e clique no botão abaixo para enviar a mensagem
      </p>
      <div className="flex gap-2 h-14 w-full items-center">
        <input
          type="text"
          placeholder="Insira seu nome"
          onChange={e => setName(e.target.value)}
          className="rounded-lg h-12 w-full bg-background px-4"
        />
        <button
          disabled={isDisabled}
          onClick={handleSendOrderToWhatsApp}
          className="w-[60px] h-[50px] transition-all items-center flex rounded-full justify-center bg-background text-background font-bold active:scale-90 disabled:!opacity-25"
        >
          <SendSVG className="*:fill-primary w-[22px] h-[22px]" />
        </button>
      </div>
    </div>
  );
}
