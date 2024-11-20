import React from 'react';
import Product from '@/components/shared/Product';
import useMenu from '@/hooks/zustand/(public)/useMenu';
import { Fragment } from 'react';
import { debounce } from 'lodash';

const BLANK_CATEGORY_ID = 'Sem categoria';

export default function List() {
  const productRefs = React.useRef([]);
  const [menu, filter, setFilter] = useMenu(s => [s.menu, s.filter, s.setFilter]);

  const categoryOrderMap = new Map();
  menu.categories?.items?.forEach((category, index) => {
    categoryOrderMap.set(category.id, index);
  });

  const validProducts = menu.products
    ?.filter(product => product.get('category_id')?.id !== BLANK_CATEGORY_ID)
    ?.sort((a, b) => {
      const categoryA = a.get('category_id')?.id;
      const categoryB = b.get('category_id')?.id;
      return (categoryOrderMap.get(categoryA) || 0) - (categoryOrderMap.get(categoryB) || 0);
    });

  const processedCategories = new Set();

  React.useEffect(() => {
    const handleScroll = debounce(() => {
      for (let i = 0; i < productRefs.current.length; i++) {
        const productElement = productRefs.current[i];
        if (productElement) {
          const rect = productElement.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            const categoryId = validProducts[i].get('category_id')?.id;
            const categoryName = validProducts[i].get('category_id')?.get('name');
            if (categoryId && categoryName) {
              setFilter({ ...filter, category: categoryName });
            }
            break;
          }
        }
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [validProducts]);

  if (validProducts?.length === 0) return null;

  return validProducts?.map((product, index) => {
    const categoryId = product.get('category_id')?.id;
    const categoryName = product.get('category_id')?.get('name');
    const isFirstInCategory = !processedCategories.has(categoryId);

    if (isFirstInCategory) {
      processedCategories.add(categoryId);
    }

    return (
      <Fragment key={product.id}>
        <div ref={el => (productRefs.current[index] = el)}>
          <Product
            index={index}
            key={product.id}
            product={product}
            id={isFirstInCategory ? categoryName : undefined}
            category={isFirstInCategory ? categoryName : undefined}
          />
        </div>
        {index !== menu.products.length - 1 && <div className="border-b border-card" />}
      </Fragment>
    );
  });
}
