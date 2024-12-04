import React from 'react';

import { CopySVG } from '@/assets/svgComponents/Copy';
import { EyeSVG } from '@/assets/svgComponents/Eye';
import { toast } from 'react-toastify';

import useAuth from '@/hooks/zustand/(private)/useAuth';

export default function LinkMenu() {
  const [companys] = useAuth(s => s.companys);

  const link = window.location.origin + '/' + companys.id;

  function handleCopy() {
    try {
      toast.success('Link copiado com sucesso');
      navigator.clipboard.writeText(link);
    } catch {
      toast.error('Não foi possivel copiar o link');
    }
  }

  function handleView() {
    window.open(link, '_blank');
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl">Gerar Link</h2>

      <div className="bg-card p-5 box-border flex flex-col gap-5 rounded-xl shadow-xl">
        <h2>Envie o link abaixo para que seus clintes possam acessar o cardapio</h2>
        <div className="bg-background p-3 rounded-md overflow-auto">
          <h3 className="text-nowrap">{link}</h3>
        </div>
        <div className="flex flex-col gap-5 xm:flex-row">
          <button
            type='button'
            onClick={handleCopy}
            className="bg-[var(--primary)] p-2 xm:pl-5 xm:pr-5 rounded-full font-bold text-white gap-3 flex items-center justify-center active:scale-95 outline-none"
          >
                        Copiar <CopySVG />
          </button>

          <button
            type='button'
            onClick={handleView}
            className="bg-blue-500 p-2 xm:pl-5 xm:pr-5 rounded-full font-bold text-white gap-3 flex items-center justify-center active:scale-95 outline-none"
          >
                        Visualizar <EyeSVG className="scale-125" />
          </button>
        </div>
      </div>
    </div>
  );
}
