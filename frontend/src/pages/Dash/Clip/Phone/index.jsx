import EditSVG from '@/assets/svgComponents/Edit';
import NewFeatureBadge from '@/components/shared/Badges/NewFeature';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import { AppParse } from '@/service/Parse';
import React from 'react';

function PhoneForm({ setIsEditing }) {
  const companys = useAuth(s => s.companys);
  const singleCompany = companys[0];

  const handleSubmit = async e => {
    e.preventDefault();
    const phone = e.target.phone.value.replace(/[\s()+-]/g, '');

    if (!phone || phone.length < 10) {
      alert('Por favor, insira um número de telefone válido.');
      return;
    }

    try {
      const Company = AppParse.Object.extend('Company');
      const query = new AppParse.Query(Company);
      const company = await query.get(singleCompany.id);
      company.set('phone', phone);
      await company.save();
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar o número de telefone:', error);
    } finally {
      singleCompany.set('phone', phone);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="bg-card p-5 box-border flex flex-col gap-5 rounded-xl shadow-xl"
    >
      <input
        type="text"
        autoComplete="off"
        name="phone"
        id="phone"
        placeholder="+55 (00) 00000-0000"
        className="w-full p-2 rounded-md border border-card bg-background"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="w-full bg-primary p-2 rounded-lg font-bold text-background gap-3 flex items-center justify-center active:scale-95 outline-none"
        >
                    Salvar
        </button>
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="w-full bg-background p-2 rounded-lg font-bold text-texts gap-3 flex items-center justify-center active:scale-95 outline-none"
        >
                    Cancelar
        </button>
      </div>
    </form>
  );
}

function PhoneDisplay() {
  const [isEditing, setIsEditing] = React.useState(false);
  const companys = useAuth(s => s.companys);

  const actualPhone = companys[0].get('phone');
  const isActualPhoneValid = actualPhone && actualPhone?.trim()?.length > 0;

  if (!isActualPhoneValid || isEditing) {
    return <PhoneForm setIsEditing={setIsEditing} />;
  }

  return (
    <div className="bg-card p-5 box-border flex flex-col gap-2 rounded-xl shadow-xl">
      <p>Seu número de telefone atual:</p>
      <div className="w-full items-center flex justify-between">
        <h1 className="font-bold text-lg text-primary">{actualPhone}</h1>
        <button className="bg-texts p-2 rounded-full active:scale-90" onClick={() => setIsEditing(true)}>
          <EditSVG className="*:fill-background" />
        </button>
      </div>
    </div>
  );
}

export default function Phone() {
  return (
    <div className="flex flex-col gap-5 relative">
      <NewFeatureBadge />
      <h2 className="text-2xl">Número de telefone</h2>
      <p className="flex flex-col gap-3">
                Este é o telefone no qual seus clientes poderão te enviar pedidos pelo carrinho de compra no aplicativo.
        <span className="text-primary text-sm">
                    Desabilita-lo ou não inserir um número de telefone impedira seus clientes de usarem a funcionalidade
                    de carrinho de compras.
        </span>
      </p>

      <PhoneDisplay />
    </div>
  );
}
