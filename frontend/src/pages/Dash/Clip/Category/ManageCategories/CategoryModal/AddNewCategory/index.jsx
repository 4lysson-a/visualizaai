import React from 'react';
import NewCategoryForm from './NewCategoryForm';

export default function AddNewCategory() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col w-full">
      {open && <NewCategoryForm onClick={handleClick} />}

      {!open && (
        <button
          onClick={handleClick}
          className="bg-primary text-background font-bold p-4 rounded-md active:scale-95"
        >
                    Adicionar nova categoria
        </button>
      )}
    </div>
  );
}
