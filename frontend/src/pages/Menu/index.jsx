import React from 'react';

import useMenu from '@/hooks/zustand/(public)/useMenu';
import Category from './Category';
import Cart from './Cart';
import List from './List';

function Menu({ ...rest }) {
  const { company, products } = useMenu(s => s.menu);

  return (
    <div className="flex flex-col w-full h-full items-center gap-10 pt-5" {...rest}>
      <h1 className="text-3xl font-bold text-center animate-fade animate-delay-7 p-5">{company?.get('name')}</h1>
      <div className="flex relative flex-col gap-8 w-full pb-[300px]">
        <Category />
        <List />

        {products?.length === 0 && (
          <h1 className="text-xl opacity-75 font-bold text-center animate-fade animate-delay-7 p-5">
                        Nenhum produto encontrado
          </h1>
        )}
      </div>
      <Cart />
    </div>
  );
}

export default Menu;
