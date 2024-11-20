import React from 'react';

import Lottie from 'lottie-react';
import animate from '@/assets/animations/not-found.json';
import { Link } from 'react-router-dom';
import { paths } from '@/router/paths';

function NotFound() {
  return (
    <div className="gap-5 flex flex-col h-full p-10">
      <div className="gap-5 flex flex-col h-full items-center">
        <Lottie animationData={animate} />

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-center opacity-80">Ops !</h1>
          <div>
            <p className="text-xl font-medium opacity-80">
                            Não foi possível encontrar a página do estabelecimento Verifique o QR Code e escaneie
                            novamente
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-1 opacity-70">
        <p>É um proprietário ?</p>
        <Link to={paths.auth.login.main} className="text-primary underline font-bold">
                    Faça login
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
