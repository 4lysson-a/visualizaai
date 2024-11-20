import React from 'react';

import sty from './style.module.css';
import { MODAL_Z_INDEX } from '@/utils/zIndex';

const NativeModal = ({ children, onClose, isOpen }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen])

  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    <>
      <div style={{ zIndex: MODAL_Z_INDEX }} className={`relative ${sty.modal}`}>
        <button onClick={onClose} className="absolute top-5 right-5 transition-all active:scale-90 bg-card text-texts w-6 flex items-center justify-center rounded-full">X</button>
        {children}
      </div>
      <div
        onClick={onClose}
        className={sty.backdrop}
      />
    </>
  );
};

export default NativeModal;
