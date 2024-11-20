import React from 'react';
import { NativeModal } from '@/components/shared/Modals';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import DeleteButton from './DeleteButton';
import AddNewCategory from './AddNewCategory';

function CategoryItem({ category, setLoading }) {
  return (
    <div className="flex min-h-[50px] flex-row relative gap-3 overflow-hidden items-center justify-between bg-card rounded-md p-4 shadow-xl">
      <div className="flex flex-row gap-3 items-center">
        <div style={{ backgroundColor: category?.get('color') }} className="w-5 h-5 rounded-full" />
        <p className="font-bold">{category?.get('name')}</p>
      </div>

      <DeleteButton setLoading={setLoading} category={category} />
    </div>
  );
}

export default function CategoryList({ open, onClose }) {
  const companys = useAuth(s => s.companys);
  const categories = companys[0].categories;

  return (
    <NativeModal key="manage_category" onClose={onClose} isOpen={open}>
      <div className="grid grid-rows-[5px_1fr_30px] gap-5 h-full">
        <div>
          <h1 className="text-2xl mt-[-60px]">Gerenciar categorias</h1>
          <p>Categorias criadas</p>
        </div>

        <div className="flex flex-col gap-6 overflow-scroll">
          {categories.map(category => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>

        <AddNewCategory />
      </div>
    </NativeModal>
  );
}
