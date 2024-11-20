import React from 'react';
import { sty } from '@/utils';

import logoBrown from '@/assets/svg/logo/logo-brown.svg';
import logoYellow from '@/assets/svg/logo/logo-yellow.svg';

export default function VariantOptions({ options, setOptions }) {
  const handleOption = option => {
    switch (option) {
    case 'white':
      setOptions(old => ({
        ...old,
        active: 'white',
        cornersSquareOptions: {
          type: 'extra-rounded',
          color: '#BB6B4F'
        },
        logo: logoBrown,
        dotsOptions: {
          color: '#BB6B4F',
          type: 'rounded'
        },
        demoBackground: 'white'
      }));
      break;
    case 'night':
      setOptions(old => ({
        ...old,
        active: 'night',
        cornersSquareOptions: {
          type: 'extra-rounded',
          color: '#eaa134'
        },
        logo: logoYellow,
        dotsOptions: {
          color: '#eaeaea',
          type: 'square'
        },
        demoBackground: '#1F2937'
      }));
      break;
    default:
      break;
    }
  };

  return (
    <div className="flex gap-5 justify-center overflow-auto w-full bg-card p-4 rounded-xl">
      <div
        className={sty(
          'h-14 w-14 bg-white border-2 rounded-xl scale-100 active:scale-9',
          options.active === 'white' && 'border-primary shadow-xl scale-110'
        )}
        onClick={() => handleOption('white')}
      />
      <div
        className={sty(
          'h-14 w-14 bg-slate-900 rounded-xl border-2 scale-100 active:scale-90',
          options.active === 'night' && 'border-primary shadow-xl scale-110'
        )}
        onClick={() => handleOption('night')}
      />
    </div>
  );
}
