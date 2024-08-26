import useCart from "@/hooks/zustand/(public)/useCart";
import useMenu from "@/hooks/zustand/(public)/useMenu";
import React from "react";

export default function SendOrder({ totalPrice }) {
  const menu = useMenu((s) => s.menu);
  const [cart] = useCart((state) => [state.cart, state.setCart]);

  const phone = menu?.company?.get("phone");

  const handleSendOrderToWhatsApp = () => {
    const order = cart.items.map((item) => {
      return `${item.quantity}x - ${item.singleItem.get("name")}`;
    });

    const message = `Olá, gostaria de fazer um pedido com os seguintes itens: \n\n${order.join(
      "\n"
    )}\n\nTotal: R$ ${totalPrice}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleSendOrderToWhatsApp}
      className="w-full bg-primary text-background font-bold rounded-lg p-2 active:scale-90">
      Enviar pedido pelo WhatsApp
    </button>
  );
}
