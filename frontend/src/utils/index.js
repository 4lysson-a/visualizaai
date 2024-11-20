import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function sty(...rest) {
  return twMerge(clsx(...rest));
}

export function numberToCurrency(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}
