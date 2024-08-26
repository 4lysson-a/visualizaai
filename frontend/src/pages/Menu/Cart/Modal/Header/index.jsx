import React from "react";
export default function Header({ totalPrice }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-[-5px]">Carrinho</h1>
      <p className="text-sm font-bold text-primary">Total: R$ {totalPrice}</p>
      <div className="h-[1px] bg-texts w-full !opacity-50" />
    </div>
  );
}
