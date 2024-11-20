import React, { Fragment } from 'react';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import { categoryEnum } from '@/utils/categoryEnum';

export default function Category({ formData, handleChange, handleResetCategory }) {
  const companys = useAuth(s => s.companys);
  const categories = companys[0].categories;

  function handleCategoryChange(e) {
    const value = e.target.value;
    if (value === categoryEnum.NO_CATEGORY) {
      handleResetCategory();
      return;
    } else if (!value) {
      handleResetCategory();
      return;
    } else {
      handleChange(e);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="category">Categoria</label>
      <select
        id="category"
        name="category"
        value={formData.category}
        onChange={handleCategoryChange}
        className="p-5 rounded-xl bg-[var(--card)] outline-none"
      >
        <option defaultChecked value={null}>
          {categoryEnum.NO_CATEGORY}
        </option>

        {categories?.map(cat => (
          <Fragment key={cat.id}>
            <option value={cat.id} className="p-5 rounded-xl" key={cat.id}>
              {cat.get('name')}
            </option>
          </Fragment>
        ))}
      </select>

      {!formData.category && (
        <p className="text-sm opacity-70 font-bold">
                    O produto não tem nenhuma categoria selecionada,{' '}
          <span className="text-red-500 border-b border-red-500">
                        Ele não sera exibido para o usuário final
          </span>
                    . Apenas produtos categorizados são exibidos para o usuário final.
        </p>
      )}
    </div>
  );
}
