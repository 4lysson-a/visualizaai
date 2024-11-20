import React from 'react';

import ClipSVG from '@/assets/svgComponents/Clip';
import BookSVG from '@/assets/svgComponents/Book';
import UserSVG from '@/assets/svgComponents/User';

import { Link, useLocation } from 'react-router-dom';

import useAuth from '@/hooks/zustand/(private)/useAuth';
import { paths } from '@/router/paths';
import { sty } from '@/utils';
import { useModal } from '@/hooks/zustand/(private)/useModal';

const pathMapping = {
  [paths.dash.company.single]: paths.dash.company.single,
  [paths.dash.options.single]: paths.dash.options.single,
  [paths.dash.user.single]: paths.dash.user.single,
};

export default function NavMenu() {
  const modal = useModal((s) => s.modal);
  const { pathname } = useLocation();

  const companys = useAuth((state) => state.companys);

  const active = React.useMemo(() => {
    for (let key in pathMapping) {
      if (pathname.includes(key)) {
        return pathMapping[key];
      }
    }
  }, [pathname]);

  const linkTo = React.useMemo(() => {
    if (companys.length === 0) {
      return paths.dash.options.single;
    }

    return `${paths.dash.company.single}/${companys[0].id}`
  }, [companys]);

  return (
    <div className={sty(
      'w-[90%] scale-90 rounded-full fixed bottom-5 left-[50%] translate-x-[-50%] h-10 p-8 border border-[var(--card)] bg-[var(--menu-dashboard-bg)] backdrop-blur-lg shadow-2xl flex flex-col items-center justify-center box-border',
      modal?.is && 'z-0'
    )}>
      <div className='w-full flex flex-row justify-around gap-5'>
        <Link to={linkTo}>
          <BookSVG
            color={active === paths.dash.company.single ? '#763C28' : '#C6A484'}
          />
        </Link>

        <Link to={paths.dash.options.single}>
          <ClipSVG
            color={active === paths.dash.options.single ? '#763C28' : '#C6A484'}
          />
        </Link>

        <Link to={paths.dash.user.single}>
          <UserSVG
            color={active === paths.dash.user.single ? '#763C28' : '#C6A484'}
          />
        </Link>
      </div>
    </div >
  );
}
