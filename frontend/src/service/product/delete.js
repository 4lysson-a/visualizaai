import { AppParse } from '@/service/Parse';

const deleteProduct = async productId => {
  try {
    const Product = AppParse.Object.extend('Product');
    const query = new AppParse.Query(Product);

    const product = await query?.get(productId);

    const result = await product.destroy();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Não foi possível deletar o produto');
  }
};

export default deleteProduct;
