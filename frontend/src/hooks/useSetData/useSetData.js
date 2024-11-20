import useAuth from '../zustand/(private)/useAuth';

export default function useSetData() {
  const [setUserCompanysAndProducts, get_products_inside_company_relation] = useAuth(s => [
    s.setUserCompanysAndProducts,
    s.get_products_inside_company_relation
  ]);

  async function setData(user) {
    try {
      const response = await setUserCompanysAndProducts(user);
      if (response) {
        for (const company of response.companys) {
          await get_products_inside_company_relation(company.id);
        }
      }

      return { response };
    } catch (error) {
      console.error('Erro ao buscar empresas e produtos:', error);
    }
  }

  return setData;
}
