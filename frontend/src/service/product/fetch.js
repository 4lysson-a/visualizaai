import { AppParse } from '@/service/Parse';

const fetchProductById = async userID => {
  try {
    const Product = AppParse.Object.extend('Product');
    const query = new AppParse.Query(Product);

    query.equalTo('user_id', AppParse.Object.extend('User').createWithoutData(userID));

    const results = await query.find();
    return results;
  } catch (error) {
    console.log(error);
    throw new Error('Não foi possível encontrar os dados de produtos');
  }
};

export async function fetchProductsByCompany(company) {
  const relation = company.relation('products');
  const products = await relation.query().find();

  return products;
}

export default fetchProductById;
