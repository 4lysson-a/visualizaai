import useMenu from "@/hooks/zustand/(public)/useMenu";
import { sty } from "@/utils";
import React from "react";

const Item = ({ name }) => {
  const [filter, setFilter] = useMenu((s) => [s.filter, s.setFilter]);

  const handleClick = () => {
    setFilter({ category: name });
  };

  return (
    <li
      onClick={() => handleClick(name)}
      className={sty(
        "text-lg font-bold text-nowrap",
        filter.category === name && "text-primary font-bold"
      )}>
      {name}
    </li>
  );
};

export default function CategoryItems() {
  const menu = useMenu((s) => s.menu);

  if (menu?.categories) {
    return (
      <div className="bg-card sticky top-0 z-50 items-center flex-row flex w-full p-2 pl-5 pr-5">
        <ul className="overflow-auto flex flex-row gap-5">
          {menu?.categories?.items?.map((category) => (
            <Item key={category.id} name={category?.get("name")} />
          ))}
        </ul>
      </div>
    );
  }

  return null;
}
