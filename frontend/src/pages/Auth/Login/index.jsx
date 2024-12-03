import React from 'react';
import Rive from '@rive-app/react-canvas';
import { useAuth0 } from '@auth0/auth0-react';
import SimpleCircularLoading from '@/components/shared/Loading/SimpleCircularLoading';
import { sty } from '@/utils';

const AccessBtn = () => {
  const { loginWithRedirect } = useAuth0();

  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    setLoading(true);
    setTimeout(async () => {
      await loginWithRedirect();
    }, 1500);
  };

  return (
    <button
      className={sty(
        'p-2 px-3 bg-primary text-[var(--background)] rounded-full font-bold text-lg',
        'flex items-center gap-2 text-nowrap active:scale-95',
        loading && 'cursor-not-allowed opacity-80'
      )}
      type="button"
      disabled={loading}
      onClick={handleClick}
    >
      <div className={sty('opacity-0 w-0', loading && 'opacity-100 w-6')}>
        <SimpleCircularLoading />
      </div>
      {loading ? 'Carregando...' : 'Acessar/Criar, minha conta'}
    </button>
  );
};

export default function Login() {
  return (
    <div className="flex flex-col gap-5 items-center h-full overflow-auto bg-background p-5 box-border justify-between">
      <h1 className="text-2xl">
                Olá, seja bem vindo ao <span className="text-primary font-bold">visualizaai</span>, clique no botão para
                acessar o sistema
      </h1>
      <Rive src="/rive/visualizaai.riv" />
      <AccessBtn />
    </div>
  );
}
