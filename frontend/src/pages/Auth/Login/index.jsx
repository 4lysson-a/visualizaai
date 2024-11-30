import React from 'react';

import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '@/service/auth/login';

import Loading from '@/components/shared/Loading';
import { paths } from '@/router/paths';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = e.target;

    try {
      setLoading(true);
      const res = await login(email.value, password.value);

      if (!res.id) {
        throw new Error('Email ou senha incorretos');
      }

      navigate(paths.dash.user.main);
    } catch {
      toast.error('Email ou senha incorretos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center h-full overflow-auto bg-background p-10 box-border">
      <p className="text-lg font-bold text-primary">Olá, faça login para acessar o painel administrativo</p>
      <form
        action="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 bg-[var(--card)] p-5 w-full pt-5 pb-5 rounded-xl justify-between"
      >
        <div className="flex flex-col gap-1">
          <label className="opacity-60" htmlFor="email">
                        Email
          </label>
          <input
            type="email"
            required
            autoComplete="on"
            id="emailInput"
            disabled={loading}
            name="email"
            placeholder="Email"
            className="rounded-md inset-px w-full p-[0_5px] font-bold bg-background disabled:opacity-50 h-12 placeholder:pl-5"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="opacity-60" htmlFor="password">
                        Senha
          </label>
          <input
            type="password"
            autoComplete="on"
            required
            disabled={loading}
            name="password"
            placeholder="Senha"
            className="font-bold pl-5 rounded-md bg-background h-12 disabled:opacity-50 placeholder:pl-5"
          />
        </div>

        {loading ? (
          <div className="mt-5 bg-primary text-[var(--background)] rounded-md h-8 font-bold text-center items-center flex justify-center overflow-hidden">
            <Loading />
          </div>
        ) : (
          <button
            className="mt-5 bg-primary text-[var(--background)] rounded-md h-10 font-bold"
            type="submit"
          >
                        Entrar
          </button>
        )}
      </form>

      <div>
        <p>Ainda não possúi uma conta ?</p>
        <Link to={paths.auth.signup.main} className="text-primary font-bold underline">
                    Crie sua conta agora
        </Link>
      </div>
    </div>
  );
}
