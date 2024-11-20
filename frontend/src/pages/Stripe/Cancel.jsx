import React from 'react';
import { paths } from '@/router/paths';
import { Link } from 'react-router-dom';

export default function Cancel() {
  return (
    <div className="p-12 h-full text-center flex flex-col gap-5 justify-around">
      <h1 className="text-2xl text-red-500 font-bold">Ops, você cancelou a assinatura {':('}</h1>
      <h2 className="text-xl">Mas não se preocupe você pode assinar novamente fazendo login na plataforma</h2>
      <Link to={paths.dash.options.main} className="underline text-primary text-xl">
                ir para dashboard
      </Link>
    </div>
  );
}
