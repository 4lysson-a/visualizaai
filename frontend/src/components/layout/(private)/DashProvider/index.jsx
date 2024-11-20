import React from 'react';

import { useNavigate } from 'react-router-dom';

import { AppParse } from '@/service/Parse';
import Loading from '@/components/shared/Loading';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import { paths } from '@/router/paths';
import isSubscriptionActive from '@/service/stripe/isSubscriptionActive';

export default function DashProvider({ children }) {
  const navigate = useNavigate();

  const isFirstRender = React.useRef(true);
  const [isLogged, setIsLogged] = React.useState('WAITING_VALIDATION');

  const [
    setUserCompanysAndProducts,
    get_data_inside_company_relation,
    setIsSubscriptionActive,
  ] = useAuth((state) => [
    state.setUserCompanysAndProducts,
    state.get_data_inside_company_relation,
    state.setIsSubscriptionActive,
  ]);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      async function setData(user) {
        try {
          const response = await setUserCompanysAndProducts(user);

          if (response) {
            for (const company of response.companys) {
              await get_data_inside_company_relation(company.id);
            }
          }
        } catch (error) {
          console.error('Erro ao buscar empresas e produtos:', error);
        }
      }

      const user = AppParse.User.current();

      async function main() {
        try {
          if (user?.id) {
            await setData(user);
            const responseSubscriptionActive = await isSubscriptionActive({
              userId: user.id,
            });
            if (responseSubscriptionActive) {
              setIsSubscriptionActive(responseSubscriptionActive);
              setIsLogged('LOGGED');
            } else {
              throw new Error('Erro ao buscar assinatura ativa');
            }
          } else {
            setIsLogged('NOT_LOGGED');
            navigate(paths.auth.login.main);
          }
        } catch (e) {
          console.error('Erro ao buscar usuário logado:', e);
          setIsLogged('NOT_LOGGED');
          AppParse.User.logOut();
          navigate(paths.auth.login.main);
        }
      }

      main();
    }
  }, []);

  if (isLogged === 'WAITING_VALIDATION') {
    return <Loading />;
  }

  return children;
}
