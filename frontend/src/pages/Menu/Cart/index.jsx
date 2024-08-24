import { useBackButton } from "@/hooks/useBackButton";
import useCart from "@/hooks/zustand/(public)/useCart";
import { sty } from "@/utils";
import React from "react";

function CartButton({ ...rest }) {
  const [cart] = useCart((state) => [state.cart]);

  const hasItems = cart?.items?.length > 0;
  const totalItems =
    cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <button
      className="bg-floatingButtonBackground p-3 rounded-full fixed bottom-4 right-4 shadow-sm active:scale-90 outline-none"
      {...rest}>
      <div className={sty("h-0", hasItems && "h-8")}>
        <div className={sty("opacity-0", hasItems && "opacity-100")}>
          <p className="text-primary font-bold">{totalItems}</p>
        </div>
      </div>
      <svg
        className="*:fill-primary"
        width="25"
        height="25"
        viewBox="0 0 78 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M62.1668 62C57.9118 62 54.5002 65.4116 54.5002 69.6666C54.5002 71.7 55.3079 73.65 56.7457 75.0878C58.1835 76.5256 60.1335 77.3333 62.1668 77.3333C64.2002 77.3333 66.1502 76.5256 67.588 75.0878C69.0258 73.65 69.8335 71.7 69.8335 69.6666C69.8335 67.6333 69.0258 65.6833 67.588 64.2455C66.1502 62.8077 64.2002 62 62.1668 62ZM0.833496 0.666626V8.33329H8.50016L22.3002 37.4283L17.0868 46.82C16.5118 47.8933 16.1668 49.1583 16.1668 50.5C16.1668 52.5333 16.9746 54.4833 18.4123 55.9211C19.8501 57.3589 21.8002 58.1666 23.8335 58.1666H69.8335V50.5H25.4435C25.1893 50.5 24.9456 50.399 24.7659 50.2193C24.5861 50.0395 24.4852 49.7958 24.4852 49.5416C24.4852 49.35 24.5235 49.1966 24.6002 49.0816L28.0502 42.8333H56.6085C59.4835 42.8333 62.0135 41.2233 63.3168 38.885L77.0402 14.0833C77.3085 13.47 77.5002 12.8183 77.5002 12.1666C77.5002 11.15 77.0963 10.1749 76.3774 9.45605C75.6585 8.73716 74.6835 8.33329 73.6668 8.33329H16.9718L13.3685 0.666626M23.8335 62C19.5785 62 16.1668 65.4116 16.1668 69.6666C16.1668 71.7 16.9746 73.65 18.4123 75.0878C19.8501 76.5256 21.8002 77.3333 23.8335 77.3333C25.8668 77.3333 27.8169 76.5256 29.2546 75.0878C30.6924 73.65 31.5002 71.7 31.5002 69.6666C31.5002 67.6333 30.6924 65.6833 29.2546 64.2455C27.8169 62.8077 25.8668 62 23.8335 62Z"
          fill="black"
        />
      </svg>
    </button>
  );
}

function CartModal({ isClose, setIsClose }) {
  const ref = React.useRef();
  const [cart, setCart] = useCart((state) => [state.cart, state.setCart]);

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

  const handleRemoveItem = (item) => {
    const newCart = cart.items
      .map((cartItem) => {
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
    <div
      ref={ref}
      className={sty(
        "bg-card shadow-sm *:animate-duration-300 fixed bottom-4 right-4",
        "p-6 overflow-y-scroll flex flex-col gap-6 justify-between",
        "rounded-lg scale-100 w-fit h-fit min-h-[50%] z-50 transition-all origin-bottom-right",
        !isClose && "*:animate-fade-up",
        isClose && "invisible opacity-0 scale-0"
      )}>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold mb-[-5px]">Carrinho</h1>
        <p className="text-sm text-colorBorder">Total: R$ {totalPrice}</p>
        <div className="h-[1px] bg-texts w-full !opacity-50" />
      </div>

      <div className="flex flex-col gap-6">
        {cart?.items?.map((item) => (
          <div
            key={item.singleItem.id}
            className="flex flex-row items-center justify-between ">
            <div className="flex flex-col">
              <p>{item.singleItem.get("name")}</p>
              <p className="opacity-80">
                {" "}
                {item.quantity}x - R${" "}
                {Number(item.singleItem.get("price") * item.quantity).toFixed(
                  2
                )}
              </p>
            </div>
            <button
              className="w-5 h-5 active:scale-90 transition-all cursor-pointer"
              onClick={() => handleRemoveItem(item)}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 66 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.5 5C4.17392 5 2.90215 5.52678 1.96447 6.46447C1.02678 7.40215 0.5 8.67392 0.5 10V15C0.5 16.3261 1.02678 17.5979 1.96447 18.5355C2.90215 19.4732 4.17392 20 5.5 20H8V65C8 67.6522 9.05357 70.1957 10.9289 72.0711C12.8043 73.9464 15.3478 75 18 75H48C50.6522 75 53.1957 73.9464 55.0711 72.0711C56.9464 70.1957 58 67.6522 58 65V20H60.5C61.8261 20 63.0979 19.4732 64.0355 18.5355C64.9732 17.5979 65.5 16.3261 65.5 15V10C65.5 8.67392 64.9732 7.40215 64.0355 6.46447C63.0979 5.52678 61.8261 5 60.5 5H43C43 3.67392 42.4732 2.40215 41.5355 1.46447C40.5979 0.526784 39.3261 0 38 0L28 0C26.6739 0 25.4021 0.526784 24.4645 1.46447C23.5268 2.40215 23 3.67392 23 5H5.5ZM20.5 25C21.163 25 21.7989 25.2634 22.2678 25.7322C22.7366 26.2011 23 26.837 23 27.5V62.5C23 63.163 22.7366 63.7989 22.2678 64.2678C21.7989 64.7366 21.163 65 20.5 65C19.837 65 19.2011 64.7366 18.7322 64.2678C18.2634 63.7989 18 63.163 18 62.5V27.5C18 26.837 18.2634 26.2011 18.7322 25.7322C19.2011 25.2634 19.837 25 20.5 25ZM33 25C33.663 25 34.2989 25.2634 34.7678 25.7322C35.2366 26.2011 35.5 26.837 35.5 27.5V62.5C35.5 63.163 35.2366 63.7989 34.7678 64.2678C34.2989 64.7366 33.663 65 33 65C32.337 65 31.7011 64.7366 31.2322 64.2678C30.7634 63.7989 30.5 63.163 30.5 62.5V27.5C30.5 26.837 30.7634 26.2011 31.2322 25.7322C31.7011 25.2634 32.337 25 33 25ZM48 27.5V62.5C48 63.163 47.7366 63.7989 47.2678 64.2678C46.7989 64.7366 46.163 65 45.5 65C44.837 65 44.2011 64.7366 43.7322 64.2678C43.2634 63.7989 43 63.163 43 62.5V27.5C43 26.837 43.2634 26.2011 43.7322 25.7322C44.2011 25.2634 44.837 25 45.5 25C46.163 25 46.7989 25.2634 47.2678 25.7322C47.7366 26.2011 48 26.837 48 27.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleSendOrderToWhatsApp}
        className="w-full bg-background rounded-lg p-2 active:scale-90">
        Enviar pedido pelo WhatsApp
      </button>
    </div>
  );
}

export default function Cart() {
  const [isClose, setIsClose] = React.useState(true);

  useBackButton(() => {
    setIsClose(true);
  });

  return (
    <div>
      <CartModal setIsClose={setIsClose} isClose={isClose} />
      <CartButton onClick={() => setIsClose(!isClose)} />
    </div>
  );
}
