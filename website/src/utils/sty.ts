import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function sty(...args: any){
  return twMerge(clsx(...args))
}

export const teste = 1;
