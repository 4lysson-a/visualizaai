import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import useMenu from '@/hooks/zustand/(public)/useMenu';
import useGeneral from '@/hooks/zustand/(general)/useGeneral';
import Loading from '@/components/shared/Loading';

import { fetchCompanyItems } from '@/service/company/fetch';
import { fetchProductsByCompany } from '@/service/product/fetch';
import { paths } from '@/router/paths';
import fetchCategoriesByCompanyRelation from '@/service/category/fetch';

function ValidateCompanyID({ children }) {
  const navigate = useNavigate();

  const isFirstRender = React.useRef(true);
  const params = useParams();
  const company_id = params[paths.menu.param];

  const [isLoading, setLoading] = useGeneral((state) => [state.loading, state.setLoading]);

  const setMenu = useMenu((state) => state.setMenu);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      async function handleGetData() {
        try {
          const company = await fetchCompanyItems(company_id);
          const products = await fetchProductsByCompany(company);
          const categories = await fetchCategoriesByCompanyRelation(company);

          setMenu({
            products: products,
            company: company,
            categories: categories,
          })

          setLoading(false);
        } catch {
          navigate(paths.notFound.main);
        } finally {
          setLoading(false);
        }
      }

      if (company_id) {
        handleGetData();
      }
    }
  }, []);

  if (!isLoading) return children;

  return <Loading />;
}

export default ValidateCompanyID;
