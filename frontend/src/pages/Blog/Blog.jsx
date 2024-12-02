import React from 'react';

import Post3 from './posts/v0.3.9.mdx';
import Post2 from './posts/v0.3.6.mdx';
import Post1 from './posts/v0.3.0.mdx';

import { sty } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { BottomShadow } from './Style/BottomShadow';
import { MarkDownDefaultStyle } from './Style/MarkdownDefaultStyle';

function Options() {
  const router = useNavigate();

  const handleClick = () => {
    router(-1);
  };

  return (
    <>
      <button
        type='button'
        onClick={handleClick}
        className={sty(
          'z-50 active:scale-90 transition-all w-[90%] text-primary font-bold text-xl scale-90 rounded-full fixed bottom-5 left-[50%] translate-x-[-50%] h-10 p-8 border border-[var(--card)] bg-[var(--menu-dashboard-bg)] backdrop-blur-lg shadow-2xl flex flex-col items-center justify-center box-border'
        )}
      >
                Entendi
      </button>
      <BottomShadow />
    </>
  );
}

export default function Blog() {
  return (
    <div className="h-full">
      <MarkDownDefaultStyle>
        <Post3 />
        <Post2 />
        <Post1 />
      </MarkDownDefaultStyle>
      <Options />
    </div>
  );
}
