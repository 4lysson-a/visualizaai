import React from 'react';
import SimpleCircularLoading from '@/components/shared/Loading/SimpleCircularLoading';

import { sty } from '@/utils';
import { toast } from 'react-toastify';
import { paths } from '@/router/paths';
import { useNavigate } from 'react-router-dom';
import { AppParse } from '@/service/Parse';
import { login } from '@/service/auth/login';
import { useAuth0 } from '@auth0/auth0-react';

export default function CreateAccount({ setSteps }) {
  const navigate = useNavigate();
  const { user: singleUser, logout } = useAuth0();
  const timeout = React.useRef(null);

  const [loading, setLoading] = React.useState({
    is: false,
    message: 'LOADING'
  });

  const handleSubmit = async e => {
    try {
      setLoading(prev => ({ ...prev, is: true, message: 'LOADING' }));
      e.preventDefault();

      let data = {};
      Object.values(e.target).forEach((input, index) => {
        if (index < e.target.length - 1) {
          data[input.name] = input.value;
        }
      });

      const pass = [...Array(22), singleUser.sub]
        .map(() => Math.random().toString(36)[2])
        .join('');

      const user = await AppParse.Cloud.run('createAccount', {
        password: pass,
        name: data.name,
        email: data.email,
        sub: singleUser.sub,
      });

      if (!user) {
        await AppParse.Cloud.run('deleteAllSessions', { userId: user.id });
        logout();
        throw new Error('Erro ao criar conta');
      }

      await login(user.get('username'), pass);

      setLoading(prev => ({ ...prev, message: 'SUCCESS' }));
      setSteps(prev => ({ ...prev, current: prev.current + 1, user }));
    } catch (e) {
      toast.error(e.message);
      setLoading(prev => ({ ...prev, message: 'ERROR' }));
    } finally {
      timeout.current = setTimeout(() => {
        setLoading(prev => ({ ...prev, is: false, message: '' }));
      }, 5000);
    }
  };

  const handleLogout = async () => {
    logout();
    navigate(paths.auth.login.main);
  }

  React.useEffect(() => {
    toast.onChange(e => {
      if (e.status === 'removed') {
        setLoading(prev => ({ ...prev, is: false, message: '' }));
        clearTimeout(timeout.current);
      }
    });
    return () => {
      clearTimeout(timeout.current);
      setLoading(prev => ({ ...prev, is: false, message: '' }));
    };
  }, []);

  return (
    <div className="p-10 pt-5 flex w-full flex-col items-center h-full gap-5 overflow-auto justify-between">
      <h1 className="text-md">Faça seu cadastro e desfrute de tudo que o visualizai pode oferecer</h1>

      <form className="bg-card p-4 flex flex-col w-full gap-2 rounded-xl " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="box-border flex flex-col gap-2">
            <label htmlFor="name">Qual o seu nome ?</label>
            <input
              autoComplete="on"
              required
              defaultValue={singleUser?.name}
              className="rounded-xl disabled:opacity-50 p-3 bg-background"
              name="name"
              disabled={loading.is}
              type="text"
              placeholder="Seu nome aqui ..."
            />
          </div>

          <div className="box-border flex flex-col gap-2">
            <label htmlFor="name">Seu melhor email</label>
            <div className="text-sm opacity-80">
              <span className="text-primary">Aviso:</span> Insira um email válido, você precisará
                            confirma-lo mais tarde
            </div>
            <input
              autoComplete="on"
              defaultValue={singleUser?.email}
              className="rounded-xl disabled:opacity-50 p-3 bg-background"
              required
              name="email"
              disabled
              type="email"
              placeholder="Seu email aqui ..."
            />
          </div>
        </div>

        {loading.is ? (
          <button
            className={sty(
              'shadow-xl rounded-xl p-3 text-primary bg-[var(--card)] border-2 h-15 border-primary font-bold flex flex-row gap-2 items-center justify-center',
              {
                'border-[#309330] text-[#309330]': loading.is && loading.message === 'SUCCESS',
                'border-[#f53357] text-[#f53357]': loading.is && loading.message === 'ERROR'
              }
            )}
            type="submit"
            disabled
          >
            {loading.message === 'LOADING' ? (
              <>
                <SimpleCircularLoading />
                                Carregando ...
              </>
            ) : null}

            {loading.message === 'SUCCESS' ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                                Conta criada !
              </>
            ) : null}

            {loading.message === 'ERROR' ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                                Erro ao criar conta
              </>
            ) : null}
          </button>
        ) : (
          <button
            className="mt-5 bg-primary text-[var(--background)] rounded-md h-10 font-bold"
            type="submit"
          >
                        Fazer cadastro
          </button>
        )}
      </form>

      <p>
                Já tem uma conta?{' '}
        <button onClick={handleLogout} type="button" className="text-primary font-bold underline">
                    Faça login
        </button>
      </p>
    </div>
  );
}
