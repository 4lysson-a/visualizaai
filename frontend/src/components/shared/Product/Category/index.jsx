import React from 'react';

export default function Category({ product }) {
  const category = product?.get('category_id');

  if (product?.get('category_id')?.get('name')) {
    return (
      <div className="flex flex-row items-center gap-2 bg-card w-fit p-1 pl-3 pr-2 rounded-md">
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: category?.get('color') }}
        />
        <p className="text-xs text-texts font-bold">{category?.get('name')}</p>
      </div>
    );
  }

  return null;
}
