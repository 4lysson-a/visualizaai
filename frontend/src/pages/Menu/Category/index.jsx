import React from 'react';

import { sty } from '@/utils';

import useMenu from '@/hooks/zustand/(public)/useMenu';

const Item = ({ name }) => {
  const [filter, setFilter] = useMenu(s => [s.filter, s.setFilter]);

  const link = `#${name}`;

  const handleClick = () => {
    setFilter({ ...filter, category: name?.trim() });
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      className={sty(
        'text-lg font-bold text-nowrap pr-5 p-2 pl-5 text-center',
        filter.category === name && 'text-primary font-bold'
      )}
    >
      {name}
    </a>
  );
};

export default function Categories() {
  const menu = useMenu(s => s.menu);

  if (menu?.categories) {
    return (
      <div className="border-b bg-background border-smooth-contrast sticky top-0 z-40 items-center flex-row flex w-full">
        <div className="fadeGradient absolute rotate-180 left-0 w-[10%] h-12" />
        <div className="overflow-x-scroll bg-background px-2 hide-scroll flex flex-row gap-5">
          {menu?.categories?.items?.map(category => {
            return <Item key={category.id} name={category?.get('name')} />;
          })}
        </div>
        <div className={sty('fadeGradient rotate-0 bg-red-500 w-[10%] absolute right-0 h-12')} />
      </div>
    );
  }

  return null;
}
