import React from "react";

import { sty } from "@/utils";

import Image from "./Image";
import Description from "./Description";
import { useBackButton } from "@/hooks/useBackButton";
import { priceConvertedToMoney } from "@/utils/priceConvertedToMoney";

export default function Product({ product }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  useBackButton(() => {
    if (expanded) setExpanded(false);
  }, [expanded]);

  return (
    <div className="relative w-full p-3 flex flex-col gap-4" onClick={handleClick}>
      <div className={sty("flex w-full flex-row gap-2 justify-between")}>
        <div className="flex flex-col gap-2">
          <p className="text-texts font-bold text-md capitalize max-w-32">
            {product?.get("name")}
          </p>
          <p className="text-texts font-medium text-sm">
            {priceConvertedToMoney(product?.get("price"))}
          </p>
        </div>

        <Image product={product} />
      </div>

      <Description product={product} expanded={expanded} />
    </div>
  );
}
