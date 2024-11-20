import { AppParse } from '@/service/Parse';

async function createProduct({ name, price, userId, categoryId, imageFile, companyId, description }) {
  try {
    const Product = AppParse.Object.extend('Product');
    const product = new Product();

    product.set('name', name);
    product.set('price', price);

    if (description) {
      product.set('description', description);
    }

    if (imageFile) {
      const safeFileName = imageFile.name.replace(/[^a-zA-Z0-9-_]/g, '_');
      const parseFile = new AppParse.File(safeFileName, imageFile);
      await parseFile.save();
      product.set('image', parseFile);
    }

    const User = AppParse.Object.extend('_User');
    const userPointer = User.createWithoutData(userId);
    product.set('user_id', userPointer);

    const Category = AppParse.Object.extend('Category');
    const categoryPointer = Category.createWithoutData(categoryId);
    product.set('category_id', categoryPointer);

    const productReturned = await product.save();

    const Company = AppParse.Object.extend('Company');
    const query = new AppParse.Query(Company);
    const company = await query.get(companyId);

    const relation = company.relation('products');
    relation.add(product);

    await company.save();

    console.log('Produto criado e associado com sucesso!');
    return productReturned;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
  }
}

export default createProduct;
