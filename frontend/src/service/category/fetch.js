export default async function fetchCategoriesByCompanyRelation(company) {
  const categories = company.relation('categories');
  const companyCategories = await categories.query().find();

  return {
    items: companyCategories,
    company_id: company.id
  };
}
