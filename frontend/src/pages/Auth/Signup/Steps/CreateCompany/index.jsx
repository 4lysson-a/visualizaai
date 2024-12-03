import React from 'react';
import { sty } from '@/utils';
import { toast } from 'react-toastify';

import SimpleCircularLoading from '@/components/shared/Loading/SimpleCircularLoading';
import { createNewCompany } from '@/service/company/create';

export default function CreateCompany({ userId, onSuccess }) {
  const timeout = React.useRef(null);

  const [formData, setFormData] = React.useState({});
  const [loading, setLoading] = React.useState({
    is: false,
    message: 'LOADING'
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = e => {
    setFormData({
      ...formData,
      imageFile: e.target.files[0]
    });
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      setLoading(prev => ({ ...prev, is: true, message: 'LOADING' }));

      await createNewCompany({
        name: formData.name,
        userId: userId,
        imageFile: formData.imageFile || false
      });

      setLoading(prev => ({ ...prev, message: 'SUCCESS' }));
      onSuccess();
    } catch (e) {
      toast.error(e.message);
      setLoading(prev => ({ ...prev, message: 'ERROR' }));
    } finally {
      timeout.current = setTimeout(() => {
        setLoading(prev => ({ ...prev, is: false, message: '' }));
      }, 5000);
    }
  };

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
    <div className="p-10 flex w-full flex-col items-center h-full gap-6 overflow-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg">
                    Parabéns você fez o seu cadastro com sucesso, agora vamos adicionar sua empresa
        </h1>
        <p className="text-sm opacity-80">Não se preocupe, você podera editar essas informações mais tarde</p>
      </div>

      <form className="bg-card p-4 flex flex-col w-full gap-6 rounded-xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <div className="box-border flex flex-col gap-1">
            <label htmlFor="name">Nome</label>
            <input
              required
              type="text"
              name="name"
              autoComplete="on"
              disabled={loading.is}
              onChange={handleChange}
              placeholder="Nome da empresa"
              className="rounded-xl disabled:opacity-50 p-3 bg-background"
            />
          </div>

          <div className="box-border flex flex-col gap-1">
            <label htmlFor="logo">Sua logomarca</label>
            <input
              type="file"
              name="logo"
              disabled={loading.is}
              onChange={handleImage}
              placeholder="Logomarca da sua empresa"
              className="rounded-xl disabled:opacity-50 p-3 bg-background"
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
            {loading.message === 'LOADING' ? <>
              <SimpleCircularLoading />
                                Carregando ...
            </> : null}

            {loading.message === 'SUCCESS' ? <>
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
            </> : null}

            {loading.message === 'ERROR' ? <>
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
            </> : null}
          </button>
        ) : (
          <button
            className="rounded-xl active:scale-90 p-3 bg-primary text-background border-2 border-transparent font-bold shadow-xl"
            type="submit"
          >
                        Criar empresa
          </button>
        )}
      </form>
    </div>
  );
}
