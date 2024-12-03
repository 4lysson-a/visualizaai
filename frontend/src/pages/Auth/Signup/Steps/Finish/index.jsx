import { paths } from '@/router/paths';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Finish() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(paths.dash.user.main);
  };

  return (
    <div className="p-10 h-full">
      <div className="flex flex-col h-full gap-5 justify-around">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium">
            <span className="text-primary font-medium">Parabéns !</span> você finalizou o seu cadastro com
                        sucesso!
          </h1>

          <p className="text-xl opacity-90 font-thin">
                        Agora você pode desfrutar de tudo que o{' '}
            <span className="font-medium">
                            Visualiza<span className="text-primary font-bold">ai</span>
            </span>{' '}
                        pode oferecer
          </p>
        </div>

        <button
          type='button'
          className="bg-primary text-background font-bold shadow-xl rounded-md px-4 py-2 active:scale-90"
          onClick={handleClick}
        >
                    Ir para o dashboard
        </button>
      </div>
    </div>
  );
}
