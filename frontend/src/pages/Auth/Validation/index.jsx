import React from 'react';
import EmailValidation from './Email';
import AccountValidation from './Account';

import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export default function Page() {
  const navegate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navegate('/auth/login');
    }
  }, [isAuthenticated, isLoading]);

  if (isAuthenticated && !user?.email_verified) return <EmailValidation />;
  return <AccountValidation />;
}
