import { sty } from "@/utils";
import React from "react";
import Header from "./Header";
import List from "./List";
import useCart from "@/hooks/zustand/(public)/useCart";

export default function CartModal({ isClose, setIsClose }) {
  const ref = React.useRef();
  const [cart] = useCart((state) => [state.cart, state.setCart]);

  const totalPrice = cart?.items
    .reduce(
      (acc, item) => acc + item.quantity * item.singleItem.get("price"),
      0
    )
    .toFixed(2);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClose(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSendOrderToWhatsApp = () => {
    const order = cart.items.map((item) => {
      return `${item.quantity}x - ${item.singleItem.get("name")}`;
    });

    const message = `Olá, gostaria de fazer um pedido com os seguintes itens: \n\n${order.join(
      "\n"
    )}\n\nTotal: R$ ${totalPrice}`;

    const url = `https://wa.me/5512936180956?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div
      ref={ref}
      className={sty(
        "bg-card shadow-sm *:animate-duration-300 fixed bottom-4 right-4",
        "p-6 overflow-y-scroll flex flex-col gap-6 justify-between",
        "rounded-lg scale-100 w-fit h-fit min-h-[50%] z-50 transition-all origin-bottom-right",
        !isClose && "*:animate-fade-up",
        isClose && "invisible opacity-0 scale-0"
      )}>
      <Header totalPrice={totalPrice} />

      <List />

      <button
        onClick={handleSendOrderToWhatsApp}
        className="w-full bg-background rounded-lg p-2 active:scale-90">
        Enviar pedido pelo WhatsApp
      </button>
    </div>
  );
}
