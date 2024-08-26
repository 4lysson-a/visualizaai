import { sty } from "@/utils";
import React from "react";
import Header from "./Header";
import List from "./List";
import useCart from "@/hooks/zustand/(public)/useCart";
import SendOrder from "./SendOrder";

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

  return (
    <div
      ref={ref}
      style={{
        gridTemplateRows: "1fr 10fr 1fr",
      }}
      className={sty(
        "bg-card shadow-sm *:animate-duration-300 fixed bottom-4 right-4",
        "p-6 overflow-y-scroll grid gap-6 justify-between",
        "rounded-lg scale-100 w-fit h-fit max-w-[80%] min-h-[50%] max-h-[80%] z-50 transition-all origin-bottom-right",
        !isClose && "*:animate-fade-up",
        isClose && "invisible opacity-0 scale-0"
      )}>
      <Header totalPrice={totalPrice} />

      <List />

      <SendOrder totalPrice={totalPrice} />
    </div>
  );
}
