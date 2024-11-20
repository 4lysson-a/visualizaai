import { AppParse } from '@/service/Parse';

const editProduct = async (productId, { name, description, imageFile, price, category }) => {
  try {
    const Product = AppParse.Object.extend('Product');
    const query = new AppParse.Query(Product);

    const product = await query?.get(productId);

    if (name) product.set('name', name);
    if (description) product.set('description', description);
    if (price) product.set('price', price);

    if (category) {
      const Category = AppParse.Object.extend('Category');
      const categoryQuery = new AppParse.Query(Category);
      const categoryObject = await categoryQuery.get(category);
      product.set('category_id', categoryObject);
    }

    if (imageFile) {
      const safeFileName = imageFile.name.replace(/[^a-zA-Z0-9-_]/g, '_');
      const parseFile = new AppParse.File(safeFileName, imageFile);
      await parseFile.save();
      product.set('image', parseFile);
    }

    const result = await product.save();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Não foi possível editar o produto');
  }
};

export default editProduct;
