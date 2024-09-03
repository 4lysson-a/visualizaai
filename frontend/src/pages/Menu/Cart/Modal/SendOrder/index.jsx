import React from "react";
import SendSVG from "@/assets/svgComponents/Send";
import useCart from "@/hooks/zustand/(public)/useCart";
import useMenu from "@/hooks/zustand/(public)/useMenu";

export default function SendOrder({ totalPrice }) {
    const menu = useMenu(s => s.menu);
    const [cart] = useCart(state => [state.cart, state.setCart]);

    const phone = menu?.company?.get("phone");
    const isCartEmpty = cart.items.length === 0;

    const handleSendOrderToWhatsApp = () => {
        const order = cart.items.map(item => {
            return `${item.quantity}x - ${item.singleItem.get("name")}`;
        });

        const message = `Olá, gostaria de fazer um pedido com os seguintes itens: \n\n${order.join(
            "\n"
        )}\n\nTotal: R$ ${totalPrice}`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="flex gap-2 h-14 w-full items-center">
            <input className="rounded-lg h-12 w-full" type="text" />
            <button
                disabled={isCartEmpty}
                onClick={handleSendOrderToWhatsApp}
                className="w-[60px] h-[50px] transition-all items-center flex rounded-full justify-center bg-background text-background font-bold active:scale-90 disabled:!opacity-25"
            >
                <SendSVG className="*:fill-primary w-[22px] h-[22px]" />
            </button>
        </div>
    );
}
