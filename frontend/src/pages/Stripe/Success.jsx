import React from 'react';

import { paths } from '@/router/paths';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="p-12 h-full text-center flex flex-col gap-5 justify-around">
      <h1 className="text-2xl text-primary font-bold">
                Parabéns !! <br /> Você agora é um assinante do visualiza ai
      </h1>
      <h2 className="text-xl">Agora você pode fazer login e acessar o painel de controle.</h2>
      <Link to={paths.dash.user.main} className="underline text-primary text-xl">
                ir para dashboard
      </Link>
    </div>
  );
}
