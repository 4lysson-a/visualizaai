import React from 'react';

import { NativeModal } from '@/components/shared/Modals';
import Separator from '@/components/shared/Separator';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import SimpleCircularLoading from '@/components/shared/Loading/SimpleCircularLoading';

export default function UserForm() {
  const input = React.useRef();

  const [companys] = useAuth(s => [s.companys]);

  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const savedMsg = companys[0].get('message');
  const [message, setMessage] = React.useState(savedMsg);

  const handleClick = type => {
    switch (type) {
    case 'open':
      setOpen(true);
      break;
    case 'close':
      setOpen(false);
      break;
    default:
      setOpen(!open);
    }
  };

  const handleChangeMessage = message => {
    companys[0].set('message', message);
    companys[0].save();
  };

  const handleSave = () => {
    try {
      setLoading(true);
      handleChangeMessage(input.current.value);
      setMessage(input.current.value);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setEdit(false);
        setOpen(false);
      }, 1000);
    }
  };

  const highlightPlaceholders = text => {
    const placeholders = ['{nome}', '{valor}', '{produtos}'];
    const parts = text.split(new RegExp(`(${placeholders.join('|')})`, 'g'));
    return parts.map((part, index) =>
      placeholders.includes(part) ? (
        <span key={index} style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex flex-col gap-5 relative">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl">Formulário dos usuários</h2>
        <p className="text-[var(--texts)]">
                    Configure como os usuários vão te chamar no whatsapp customizando a mensagem.
        </p>
      </div>

      <button
        type='button'
        onClick={() => handleClick('open')}
        className="p-3 relative bg-[var(--card)] rounded-xl font-bold text-[var(--texts)] transition duration-200 text-center active:scale-95"
      >
                Customizar mensagem
      </button>

      {open ? <NativeModal key="user_form" onClose={() => handleClick('close')} isOpen={open}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl mt-[-60px]">Gerenciar mensagem</h1>
              <p className="text-xl">
                                    Personalize a mensagem que será enviada para os usuários, você pode usar as tags{' '}
                <span className="text-primary">{'{nome}'}</span>,{' '}
                <span className="text-primary">{'{valor}'}</span> e{' '}
                <span className="text-primary">{'{produtos}'}</span> para inserir o nome do usuário,
                                    valor e produtos.
              </p>
              <p className="text-sm">
                                    é importante que você mantenha as tags{' '}
                <span className="text-primary">{'{nome}'}</span>,{' '}
                <span className="text-primary">{'{valor}'}</span> e{' '}
                <span className="text-primary">{'{produtos}'}</span> na mensagem para que o nome do
                                    usuário, valor e produtos sejam inseridos corretamente.
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col gap-2">
            <p>Mensagem atual</p>
            {edit ? (
              <textarea
                ref={input}
                cols="30"
                rows="10"
                placeholder={message}
                className="bg-card rounded-xl text-texts p-6 text-xl"
              ></textarea>
            ) : (
              <div
                style={{
                  whiteSpace: 'pre-wrap'
                }}
                className="bg-card rounded-xl text-texts p-6 text-xl"
              >
                {highlightPlaceholders(message)}
              </div>
            )}
          </div>

          <div className="flex w-full items-center gap-4 pt-6 justify-between">
            <button
              type='button'
              disabled={loading}
              onClick={handleSave}
              className="bg-primary disabled:opacity-50 flex items-center justify-center gap-2 font-bold text-card p-4 w-full px-6 rounded-xl"
            >
              {loading ? <div className="w-4 flex">
                <SimpleCircularLoading />
              </div> : null}
                                Salvar
            </button>
            <button
              type='button'
              disabled={loading}
              onClick={() => setEdit(!edit)}
              className="bg-transparent disabled:opacity-50 border text-primary font-bold border-primary p-4 w-full px-6 rounded-xl"
            >
              {edit ? 'Cancelar' : 'Editar'}
            </button>
          </div>
        </div>
      </NativeModal> : null}
    </div>
  );
}
