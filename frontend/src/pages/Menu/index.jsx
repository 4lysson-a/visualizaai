import React from "react";

import Product from "@/components/shared/Product";
import useMenu from "@/hooks/zustand/(public)/useMenu";
import { Fragment } from "react";
import CategoryItems from "./CategoryItems";

function Menu({ ...rest }) {
  const [menu, filter, getFilter] = useMenu((s) => [s.menu, s.filter, s.getFilter]);
  const { company, products } = menu;

  const productsByFilter = React.useMemo(() => {
    if (!filter.category) {
      getFilter();
    }

    return products?.filter(
      (product) => product?.get("category_id")?.get("name") === filter.category
    );
  }, [filter]);

  return (
    <div
      className="flex flex-col w-full h-full items-center gap-10 pt-5"
      {...rest}
    >
      <h1 className="text-3xl font-bold text-center animate-fade animate-delay-7 p-5">
        {company?.get("name")}
      </h1>

      <div className="flex relative flex-col gap-8 w-full">
        <CategoryItems />
        {productsByFilter?.map((product, index) => (
          <Fragment key={product.id}>
            <Product index={index} key={product.id} product={product} />
            {index !== products.length - 1 && (
              <div className="border-b border-card" />
            )}
          </Fragment>
        ))}

        {productsByFilter?.length === 0 && (
          <h1 className="text-xl opacity-75 font-bold text-center animate-fade animate-delay-7 p-5">
            Nenhum produto encontrado
          </h1>
        )}
      </div>
    </div>
  );
}

export default Menu;
