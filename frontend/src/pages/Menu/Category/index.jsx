import React from "react";

import { sty } from "@/utils";

import useMenu from "@/hooks/zustand/(public)/useMenu";

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
                "text-lg font-bold text-nowrap pr-5 p-2 pl-5",
                filter.category === name && "text-primary font-bold"
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
                <div className="overflow-auto bg-background hide-scroll flex flex-row gap-5">
                    {menu?.categories?.items?.map(category => {
                        return <Item key={category.id} name={category?.get("name")} />;
                    })}
                </div>
            </div>
        );
    }

    return null;
}
