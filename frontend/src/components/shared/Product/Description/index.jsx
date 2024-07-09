import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import ClickToViewMoreMsg from "./ClickToViewMoreMsg";

export default function Description({ expanded, product, ...rest }) {
  const ref = React.useRef(null);

  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(ref.current ? ref.current.scrollHeight : 0);
  }, [expanded]);

  if (!product.get("description")) return null;

  return (
    <>
      <div>
        <div
          ref={ref}
          style={expanded ? { height } : { height: "1.75rem" }}
          className={twMerge(
            clsx(
              !expanded &&
              "w-[70%] overflow-ellipsis overflow-hidden whitespace-nowrap relative sm:w-[90%]"
            )
          )}
          {...rest}
        >
          {!expanded && (
            <div className="absolute w-full h-full fadeGradient left-4" />
          )}
          <p className="text-[var(--texts)]">{product?.get("description")}</p>
        </div>
      </div>
      {!expanded && <ClickToViewMoreMsg />}
    </>
  );
}
