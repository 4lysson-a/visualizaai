import React from 'react';

import AddSVG from '@/assets/svgComponents/Add';
import AddForm from '@/pages/Dash/Company/Forms/Add';

import { useBackButton } from '@/hooks/useBackButton';

import NativeModal from '@/components/shared/Modals/NativeModal';

const FloatAddButton = ({ ...rest }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
        {...rest}
        onClick={handleOpen}
        className="shadow-xl fixed z-1 bottom-24 right-10 bg-floatingButtonBackground w-12 h-12 rounded-full flex flex-col justify-center items-center active:scale-90 duration-150 transition"
      >
        <AddSVG className="text-4xl text-center font-medium text-[var(--color-border-contrast)]" />
      </div>

      {open && (
        <NativeModal key="add" onClose={handleClose} isOpen={open}>
          <AddForm onClose={handleClose} />
        </NativeModal>
      )}
    </>
  );
};

export default FloatAddButton;
