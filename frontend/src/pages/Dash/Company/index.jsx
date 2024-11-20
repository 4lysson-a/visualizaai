import React from 'react';

import Item from '@/pages/Dash/Company/Item';
import PageTemplate from '@/pages/Dash/lib/PageTemplate';
import useAuth from '@/hooks/zustand/(private)/useAuth';
import FloatAddButton from '@/pages/Dash/Company/FloatButton';

import { useParams } from 'react-router-dom';
import { paths } from '@/router/paths';
import CategoryItems from './CategoryItems';
import { categoryEnum } from '@/utils/categoryEnum';

const Company = () => {
  const params = useParams();
  const company_id = params[paths.dash.company.param];

  const [companyById, products, filter] = useAuth(s => [s.companyById, s.products, s.filter]);

  const company = companyById(company_id);
  const productsByCompany = products[company_id];

  const productsByFilter = React.useMemo(() => {
    if (filter.category === categoryEnum.NO_CATEGORY) {
      return productsByCompany;
    }

    return productsByCompany?.filter(product => product?.get('category_id')?.get('name') === filter.category);
  }, [filter, productsByCompany, products]);

  return (
    <PageTemplate
      title={{
        text: 'Editar produtos de',
        highlight: company?.get('name')
      }}
    >
      <CategoryItems />

      <div className="flex flex-col gap-8 relative">
        {productsByFilter?.map(product => (
          <Item key={product.id} product={product} />
        ))}
      </div>

      <FloatAddButton />
    </PageTemplate>
  );
};

export default Company;
