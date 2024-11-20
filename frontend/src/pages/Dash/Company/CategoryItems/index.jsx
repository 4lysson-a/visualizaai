import useAuth from '@/hooks/zustand/(private)/useAuth';
import { sty } from '@/utils';
import { categoryEnum } from '@/utils/categoryEnum';
import React from 'react';

const Item = ({ name }) => {
  const [filter, setFilter] = useAuth(s => [s.filter, s.setFilter]);

  const handleClick = () => {
    setFilter({ category: name });
  };

  const active = React.useMemo(() => {
    if (filter.category === name) {
      return true;
    }
  }, [filter.category, name]);

  return (
    <li
      onClick={() => handleClick(name)}
      className={sty(
        'text-xl font-bold border-transparent text-nowrap',
        active && 'text-primary border-primary font-bold'
      )}
    >
      {name}
    </li>
  );
};

export default function CategoryItems() {
  const categories = useAuth(s => s.categories);

  if (categories) {
    return (
      <div className="bg-card rounded-xl sticky top-0 items-center flex-row flex w-full p-1 pt-3 pl-5 pr-5">
        <ul className="overflow-auto flex flex-row gap-5 pb-3">
          <Item name={categoryEnum.NO_CATEGORY} />
          {categories?.items?.map(category => (
            <Item key={category.id} name={category?.get('name')} />
          ))}
        </ul>
      </div>
    );
  }

  return null;
}
