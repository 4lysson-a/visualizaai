import React from "react";

import EditSVG from "@/assets/svgComponents/Edit";
import EditForm from "@/pages/Dash/Company/Forms/Edit";
import NativeModal from "@/components/shared/Modals/NativeModal";

import { numberToCurrency } from "@/utils";
import { useBackButton } from "@/hooks/useBackButton";

const Item = ({ product }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useBackButton(() => {
    if (open) {
      handleClose();
      return true;
    }
  }, [open]);

  return (
    <>
      <div
        onClick={handleOpen}
        className="bg-[var(--card)] relative p-3 rounded-xl flex flex-row justify-between items-center shadow-lg border border-[var(--color-border-contrast)]"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <h1 className="overflow-hidden w-full max-w-[95%] text-nowrap text-ellipsis font-medium">
              {product?.get("name")}
            </h1>
            <p className="opacity-80 font-medium text-sm">
              {numberToCurrency(product?.get("price"))}
            </p>
            <p className="opacity-80 font-medium text-ellipsis overflow-hidden w-32 text-sm text-nowrap">
              {product?.get("description")}
            </p>
          </div>
          {product?.get("image") && (
            <img
              src={product?.get("image")?.url()}
              alt={product?.get("name")}
              className="w-16 h-16 object-cover rounded-xl"
            />
          )}
        </div>
        <EditSVG className="ml-4 w-5 h-5" />
      </div>

      {open && (
        <NativeModal
          isOpen={open}
          shouldReturnFocusAfterClose
          onClose={handleClose}
        >
          <EditForm product={product} onClose={handleClose} />
        </NativeModal>
      )}
    </>
  );
};

export default Item;
