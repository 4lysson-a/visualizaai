import React from 'react';
import ManageCategories from './ManageCategories';

export default function Categories() {
  return (
    <div className="flex flex-col gap-5 relative">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl">Crie categorias para os seus produtos</h2>
        <p className="text-[var(--texts)]">
                    As categorias ajudam a organizar os seus produtos. Começe a organizar seus produtos criando
                    categorias agora mesmo.
        </p>
      </div>

      <ManageCategories />
    </div>
  );
}
