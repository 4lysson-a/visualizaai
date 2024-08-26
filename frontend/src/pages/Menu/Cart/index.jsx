import { useBackButton } from "@/hooks/useBackButton";
import React from "react";
import { createPortal } from "react-dom";
import FloatBtn from "./FloatBtn";
import CartModal from "./Modal";

function Cart() {
  const [isClose, setIsClose] = React.useState(true);

  useBackButton(() => {
    setIsClose(true);
  });

  React.useEffect(() => {
    if (isClose) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isClose]);

  return (
    <div>
      <CartModal setIsClose={setIsClose} isClose={isClose} />
      <FloatBtn onClick={() => setIsClose(!isClose)} />
    </div>
  );
}

export default function CartWithPortal() {
  return createPortal(<Cart />, document.getElementById("cart"));
}