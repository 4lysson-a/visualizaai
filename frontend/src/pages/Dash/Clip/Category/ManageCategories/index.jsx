import React from 'react';
import CategoryModal from './CategoryModal';

export default function ManageCategories() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="p-3 relative bg-[var(--card)] rounded-xl font-bold text-[var(--texts)] transition duration-200 text-center active:scale-95"
      >
                Gerenciar categorias
      </button>

      {open && <CategoryModal open={open} onClose={() => setOpen(false)} />}
    </>
  );
}
