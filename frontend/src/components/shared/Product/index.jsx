import React from 'react';

import { sty } from '@/utils';

import Image from './Image';
import Description from './Description';
import { AddToCart } from './AddToCart';
import { useBackButton } from '@/hooks/useBackButton';
import { priceConvertedToMoney } from '@/utils/priceConvertedToMoney';

export default function Product({ product, category, ...rest }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  useBackButton(() => {
    if (expanded) setExpanded(false);
  }, [expanded]);

  return (
    <div className={sty('relative w-full p-3 pb-0 flex flex-col gap-4', category && 'pt-14')} {...rest}>
      <div className={sty('flex w-full flex-row gap-2 justify-between')}>
        <div className="flex flex-col gap-2">
          <p className="text-texts font-bold text-md capitalize lg:max-w-32">{product?.get('name')}</p>
          <p className="text-texts font-medium text-sm">{priceConvertedToMoney(product?.get('price'))}</p>
        </div>

        <Image product={product} />
        <AddToCart product={product} />

        <div className="absolute top-0 bg-primary rounded-lg px-2 font-bold text-background text-sm">
          {category}
        </div>
      </div>

      <Description onClick={handleClick} product={product} expanded={expanded} />
    </div>
  );
}
