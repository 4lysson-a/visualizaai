import { useBackButton } from "@/hooks/useBackButton";
import React from "react";
import FloatBtn from "./FloatBtn";
import CartModal from "./Modal";

export default function Cart() {
  const [isClose, setIsClose] = React.useState(true);

  useBackButton(() => {
    setIsClose(true);
  });

  return (
    <div>
      <CartModal setIsClose={setIsClose} isClose={isClose} />
      <FloatBtn onClick={() => setIsClose(!isClose)} />
    </div>
  );
}
