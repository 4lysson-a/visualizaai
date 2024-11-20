import React from 'react';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import { Navigate } from 'react-router-dom';
import { paths } from '@/router/paths';

export default function Default() {
  const companys = useAuth(s => s.companys);

  const linkTo = React.useMemo(() => {
    if (companys.length === 0) {
      return `${paths.dash.company.single}/${companys[0]?.id}`;
    }

    return paths.dash.options.single;
  }, [companys]);

  return <Navigate to={linkTo} />;
}
