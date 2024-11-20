import { sty } from '@/utils';
import React from 'react';

export const Template = ({ ...rest }) => {
  return <div>{rest.children}</div>;
};

export const Video = ({ src }) => (
  <video controls={false} autoPlay loop muted className="rounded-xl overflow-hidden shadow-lg border-4 border-card">
    <source className="rounded-xl" src={src} type="video/mp4" />
  </video>
);

export const Link = ({ href, children }) => (
  <a href={href} className="text-primary underline hover:underline" target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const Frame = ({ ...rest }) => (
  <div className="border-4 border-card rounded-xl shadow-lg overflow-hidden w-fit">{rest.children}</div>
);

export const Separator = () => <hr className="border-gray-300 py-10" />;

export const Badge = ({ text, ...rest }) => (
  <span {...rest} className={sty('bg-primary text-white px-2 py-1 rounded-full text-xs font-bold', rest.className)}>
    {text}
  </span>
);

export const Title = ({ text }) => <h1 className="text-3xl font-bold text-primary !m-0">{text}</h1>;
