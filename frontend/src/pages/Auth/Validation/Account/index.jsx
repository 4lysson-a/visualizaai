import React from 'react';
import Loading from '@/components/shared/Loading';
import BackButton from '@/components/shared/BackButton';

import { useAuth0 } from '@auth0/auth0-react';
import { AppParse } from '@/service/Parse';
import { login } from '@/service/auth/login';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/router/paths';

export default function AccountValidation() {
  const navigate = useNavigate();
  const { logout, user } = useAuth0();

  const handleNavigate = path =>
    setTimeout(() => {
      navigate(path);
    }, 3000);

  const handleLogin = async singleUser => {
    if (singleUser?.key) {
      const key = String(singleUser?.key);
      const isLogged = await login(user.email, key);
      if (isLogged.id) {
        handleNavigate(paths.dash.user.main);
      }
    }
  };

  const handleCreateAccount = async () => {
    handleNavigate(paths.auth.signup.main);
  };

  const fetchUser = async () => {
    if (user) {
      try {
        const singleUser = await AppParse.Cloud.run('validateUser', { sub: user.sub });

        switch (singleUser?.state) {
        case 'CREATE_ACCOUNT':
          handleCreateAccount();
          break;
        case 'ACCOUNT_VALIDATED':
          await handleLogin(singleUser);
          break;
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        navigate(paths.auth.login.main);
      }
    }
  };

  React.useEffect(() => {
    fetchUser();
  }, [user]);

  return (
    <div className="flex justify-between flex-col h-full p-6 gap-4">
      <BackButton text="na batida qq" onClick={logout} />
      <div className="h-full flex justify-center items-center flex-col gap-4">
        <div>
          <Loading />
        </div>
      </div>
      <p className="animate-fade-up text-primary font-bold text-xl text-center">Estamos validando o seu login</p>
    </div>
  );
}
