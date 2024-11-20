import { AppParse } from '@/service/Parse';

export const fetchCompanyById = async companyId => {
  const User = AppParse.Object.extend('User');
  const query = new AppParse.Query(User);

  try {
    const user = await query?.get(companyId);
    return user;
  } catch {
    throw new Error('Não foi possível encontrar os dados da empresa');
  }
};

export async function fetchCompanysFromUser({ user }) {
  const userCompanysRelation = user.relation('user_companys');
  const userCompanysQuery = userCompanysRelation.query();

  const userCompanys = await userCompanysQuery.find();

  return userCompanys;
}

export async function fetchCompanyItems(companyId) {
  const Company = AppParse.Object.extend('Company');
  const query = new AppParse.Query(Company);

  try {
    query.equalTo('objectId', companyId);
    const result = await query.first();
    if (result) {
      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar Company:', error);
  }
}

export async function fetchCompanyCategoriesRelation(company) {
  const relation = company.relation('categories');
  const query = relation.query();
  const categories = await query.find();

  return categories;
}
