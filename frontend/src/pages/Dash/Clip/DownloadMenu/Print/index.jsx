import React from 'react';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import { priceConvertedToMoney } from '@/utils/priceConvertedToMoney';
import { sty } from '@/utils';

export default function Print({ show }) {
  const companys = useAuth(state => state.companys);
  const company_id = companys[0]?.id;

  const [companyById, products] = useAuth(state => [state.companyById, state.products]);

  const company = companyById(company_id);
  const productsByCompany = products[company_id];

  return (
    <div
      id="print"
      className={sty(
        'flex p-64 pt-20 bg-background text-texts flex-col gap-80 w-[2480px] h-[3508px] items-center justify-around',
        show ? 'visible' : 'invisible h-0 w-0 absolute z-[-1] p-0 overflow-hidden'
      )}
    >
      <h1 className="text-9xl">
                Cardápio <span className="text-primary font-bold">{company.get('name')}</span>
      </h1>
      <div className="grid grid-rows-5 grid-cols-2 w-full gap-40">
        {productsByCompany?.map(product => (
          <div key={product.id} className="flex flex-col gap-5">
            <h2 className="text-7xl font-bold">{product.get('name')}</h2>
            <p className="text-4xl opacity-80">{product.get('description')}</p>
            <p className="text-4xl font-bold">{priceConvertedToMoney(product.get('price'))}</p>

            <div className="h-10 w-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
