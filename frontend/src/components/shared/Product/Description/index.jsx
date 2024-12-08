import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import ArrowSVG from '@/assets/svgComponents/Arrow';
import { sty } from '@/utils';

export default function Description({ expanded, product, ...rest }) {
  const ref = React.useRef(null);

  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(ref.current ? ref.current.scrollHeight : 0);
  }, [expanded]);

  if (!product.get('description')) return null;

  return (
    <div className={sty('flex flex-row gap-4 items-center', expanded && 'flex-col items-start')} {...rest}>
      <div
        ref={ref}
        style={expanded ? { height } : { height: '1.75rem' }}
        className={twMerge(
          clsx(!expanded && 'w-[70%] overflow-ellipsis overflow-hidden relative sm:w-[90%]')
        )}
      >
        {!expanded ? <div className="absolute w-full h-full fadeGradient left-4" /> : null}
        <p className="text-[var(--texts)] w-full break-all">{product?.get('description')}</p>
      </div>

      <div className={sty('flex w-10 items-center justify-center', expanded && 'w-full')}>
        <button className="opacity-50">
          <ArrowSVG className={sty('*:fill-texts rotate-180', expanded && 'rotate-0')} />
        </button>
      </div>
    </div>
  );
}
