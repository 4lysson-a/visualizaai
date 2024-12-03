import { sty } from '@/utils';
import React from 'react';

export default function BackButton({ ...rest }) {
  const handleClick = () => {
    window.location.href = '/';
  }

  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShow(prevShow => !prevShow);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      onClick={handleClick}
      type="button"
      className={sty(
        'transition-all w-[40px] duration-300 bg-card p-2 px-3 rounded-full absolute top-4 left-4 z-10 opacity-95 flex flex-row items-center',
        show && 'w-[100px]'
      )}
      {...rest}
    >
      <div className="*:w-4 *:h-4">
        <svg
          width="93"
          height="130"
          viewBox="0 0 93 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            className="stroke-texts opacity-80"
            d="M11 118.88L79.4012 68.9775C82.1388 66.9803 82.1387 62.8959 79.4011 60.8988L11 11"
            stroke="black"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        className={sty(
          'translate-x-4 overflow-hidden transition-all duration-150 delay-200 opacity-0',
          show && 'translate-x-0 opacity-100 w-full ml-4'
        )}
      >
        <p className="text-md font-medium text-texts">Voltar</p>
      </div>
    </button>
  );
}
